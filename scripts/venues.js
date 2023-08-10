import { getVenues, getBookings } from "./database.js"

const venuesArray = getVenues()
const bookings = getBookings()


document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        let bandsNameArray = []
        
        if (itemClicked.dataset.type === "venue"){
            const clickedVenueName = itemClicked.dataset.name;
            
            
            for (const booking of bookings){
                if(clickedVenueName === booking.venuesName){
                bandsNameArray.push(booking.bandsName)
                
            }
        }
        if (bandsNameArray.length > 0) {
            const bandsNames = bandsNameArray.join(", ")
            window.alert(`${clickedVenueName} has been booked by the following bands ${bandsNames} `)
        }
    }
});









export const venuesList = () => {

    let venuesHTML = "<ul>"

    for (const venue of venuesArray) {
        venuesHTML += `<li data-name="${venue.name}"
                        data-address = "${venue.address}"  
                        data-squareFootage= "${venue.squareFootage}"
                        data-maximumOccupancy= "${venue.maximumOccupancy}"
                        
                        data-type = "venue">
                        ${venue.name}
                        </li>`// Convert each dock object to an <li> and append to the docksHTML string
    }

    venuesHTML += "</ul>"

    return venuesHTML
}