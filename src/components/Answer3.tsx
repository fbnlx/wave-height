import "./Answer3.css";

export default function Question3() {
  return (
    <p className="answer">
      <b>Answer to question 3:</b> When handling data all the way from 1950, due
      to the size of the data I would not serve the parsed version in its
      entirety to the client. I would either create a backend endpoint that
      retrieves the wave height for a particular coordinate, or I would serve
      the data to the frontend in chunks, for a more responsive experience. For
      this case I would limit how much the user can zoom out on the map, and
      retrieve the data in the background only for the coordinates that are
      within the bounds. I would combine this with debouncing the request, so
      there wouldn't be data transferred while the user is panning or zooming
      the map.
    </p>
  );
}
