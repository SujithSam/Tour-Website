import Mountain1 from "../assets/1.jpg";
import Mountain2 from "../assets/2.jpg";
import Mountain3 from "../assets/3.jpg";
import Mountain4 from "../assets/4.jpg";
import DestinationData from "./DestinationData";

import "./DestinationStyles.css";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destinations</h1>
      <p>Tours give you the oppertunity to explore</p>
      <DestinationData
        className="first-des"
        heading="Taal Volcano, Batangas"
        text="Taal Volcano is a large caldera filled by Taal Lake in the
      Philippines. Located in the province of Batangas, the volcano is
      second of the most active volcanoes in the country, with 38 recorded
      historical eruptions, all of which were concentrated on Volcano
      Island, near the middle of Taal Lake . Taal Volcano in Batangas,
      Philippines began to erupt on January 12, 2020, when a
      phreatomagmatic eruption from its main crater spewed ashes over
      Calabarzon, Metro Manila, and some parts of Central Luzon and Ilocos
      Region, resulting in the suspension of school classes, work
      schedules, and flights in the area. The Philippine Institute
      of Volcanology and Seismology (PHIVOLCS) subsequently issued an
      Alert Level 4, indicating that a hazardous explosive eruption is
      possible within hours to days. Volcanic activity continued
      into 2021, when smaller eruptions occurred in July 2021. On 26
      March 2022, a short-lived phreatomagmatic eruption was recorded by
      PHIVOLCS raising the status from Alert level 2 to Alert level 3 as
      well as surrounding towns."
        img1={Mountain1}
        img2={Mountain2}
      />
      <DestinationData
        className="first-des-reverse"
        heading=" Eiffel Tower (Tour Eiffel) has become the main symbol of Paris"
        text="Two senior engineers working for the architect and engineer Gustave Eiffel designed the Tower, which was then approved by Eiffel and proposed as the centrepiece for the world fair held in France’s capital, the Exposition Universelle in 1889. Once approved, 250 builders were hired to build the monument, which took over two years to finish.

        Initially, the Eiffel Tower was subject of controversy. The artists of the period thought the monument to be monstrous, and given its poor profitability, it was suggested on several occasions that they should demolish it.
        
        During World War I, enemy messages were intercepted thanks to the tower radiotelegraphy centre.
        
        Currently, the Eiffel Tower is the most-visited monument in the world with over 7 million visitors a year. This is partly due to the popularity of Paris as a tourist destination.   "
        img1={Mountain3}
        img2={Mountain4}
      />
    </div>
  );
};
export default Destination;
