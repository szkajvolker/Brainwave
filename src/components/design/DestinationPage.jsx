import DestinationCard from "../components/DestinationCard";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const DestinationPage = () => {
  const [destination, setDestination] = useState({});

  const { id } = useParams();

  useEffect(() => {
    const fetchDestination = async () => {
      try {
        const response = await fetch(`http://localhost:5555/api/destinations/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch destination");
        }
        const destinationData = await response.json();
        setDestination(destinationData.destination);
      } catch (error) {
        console.error(error);
      }
    };
    fetchDestination();
  }, [id]);

  return (
    <div>
      <div className="flex flex-col items-center mt-20">
        <div className="flex flex-col items-center">
          DestinationsPage
          <DestinationCard destination={destination} isDetailsOn={true} />
        </div>
      </div>
    </div>
  );
};

export default DestinationPage;
