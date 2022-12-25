import TripData from "./TripData";
import "./TripStyles.css";
import Trip1 from "../assets/5.jpg";
import Trip2 from "../assets/8.jpg";
import Trip3 from "../assets/6.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can Discover unique destinations using Google Maps.</p>
      <div className="tripcard">
        <TripData
          image={Trip1}
          heading="Trip to Indonesia"
          text="Tourism in Indonesia is an important component of the Indonesian economy as well as a significant source of its foreign exchange revenues. Indonesia was ranked at 20th in the world tourist Industry in 2017, also ranked as the ninth-fastest growing tourist sector in the world, the third-fastest growing in Asia and fastest-growing in Southeast Asia.[1] In 2018, Denpasar, Jakarta and Batam are among of 10 cities in the world with fastest growth in tourism, 32.7, 29.2 and 23.3 percent respectively. The tourism sector ranked as the 4th largest among goods and services export sectors.
        Indonesia possesses rich and colourful culture, such as Barong dance performance in Bali.
        On 2019, Indonesia recorded 16.10 million foreign tourist arrivals, seeing a 1.9% per cent increase than that of 2018.[4] In 2015, 9.73 million international visitors entered Indonesia, staying in hotels for an average of 7.5 nights and spending an average of US$1,142 per person during their visit, or US$152.22 per person per day.[5] Singapore, Malaysia, China, Australia, and Japan are the top five sources of visitors to Indonesia"
        />
        <TripData
          image={Trip2}
          heading="Trip to Malaysia"
          text="Tourism in Indonesia is an important component of the Indonesian economy as well as a significant source of its foreign exchange revenues. Indonesia was ranked at 20th in the world tourist Industry in 2017, also ranked as the ninth-fastest growing tourist sector in the world, the third-fastest growing in Asia and fastest-growing in Southeast Asia.[1] In 2018, Denpasar, Jakarta and Batam are among of 10 cities in the world with fastest growth in tourism, 32.7, 29.2 and 23.3 percent respectively. The tourism sector ranked as the 4th largest among goods and services export sectors.
        Indonesia possesses rich and colourful culture, such as Barong dance performance in Bali.
        On 2019, Indonesia recorded 16.10 million foreign tourist arrivals, seeing a 1.9% per cent increase than that of 2018.[4] In 2015, 9.73 million international visitors entered Indonesia, staying in hotels for an average of 7.5 nights and spending an average of US$1,142 per person during their visit, or US$152.22 per person per day.[5] Singapore, Malaysia, China, Australia, and Japan are the top five sources of visitors to Indonesia"
        />
        <TripData
          image={Trip3}
          heading="Trip to France"
          text="Tourism in Indonesia is an important component of the Indonesian economy as well as a significant source of its foreign exchange revenues. Indonesia was ranked at 20th in the world tourist Industry in 2017, also ranked as the ninth-fastest growing tourist sector in the world, the third-fastest growing in Asia and fastest-growing in Southeast Asia.[1] In 2018, Denpasar, Jakarta and Batam are among of 10 cities in the world with fastest growth in tourism, 32.7, 29.2 and 23.3 percent respectively. The tourism sector ranked as the 4th largest among goods and services export sectors.
        Indonesia possesses rich and colourful culture, such as Barong dance performance in Bali.
        On 2019, Indonesia recorded 16.10 million foreign tourist arrivals, seeing a 1.9% per cent increase than that of 2018.[4] In 2015, 9.73 million international visitors entered Indonesia, staying in hotels for an average of 7.5 nights and spending an average of US$1,142 per person during their visit, or US$152.22 per person per day.[5] Singapore, Malaysia, China, Australia, and Japan are the top five sources of visitors to Indonesia"
        />
      </div>
    </div>
  );
}
export default Trip;
