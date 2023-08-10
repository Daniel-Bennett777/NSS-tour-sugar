import { bookingsList } from "./bookings.js"
import { venuesList } from "./venues.js"
import { bandsList } from "./bands.js"


const mainContainer = document.querySelector("#container")

const applicationHTML = `
<h1>Bands United</h1>
<article class="details">
    <section class="detail--column list details__bookings">
        <h2>Bookings</h2>
        ${bookingsList()}
    </section>
    <div class="detail--row"> <!-- Create a row container for venues and bands -->
    <section class="detail--column list details__venues">
        <h2>Venues</h2>
        ${venuesList()}
    </section>
    <section class="detail--column list details__bands">
        <h2>Bands</h2>
        ${bandsList()}
    </section>
</div>
</article>

`

mainContainer.innerHTML = applicationHTML