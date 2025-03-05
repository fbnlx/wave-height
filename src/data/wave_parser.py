import xarray as xr
import math
import json
def main():
    with xr.open_dataset('waves_2019-01-01.nc') as ds:
        max_hmax = ds["hmax"].max(dim="time")

        hmax_dict = {
            f"{lon};{lat}": round(float(hmax), 4)
            for (lat, lon), hmax in max_hmax.stack(points=("latitude", "longitude")).to_series().items()
            if not math.isnan(hmax)
        }

        with open('wave_data.json', 'w') as f:
            json.dump(hmax_dict, f)
if __name__ == '__main__':
    main()