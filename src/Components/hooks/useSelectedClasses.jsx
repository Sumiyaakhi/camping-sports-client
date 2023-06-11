import React, { useEffect, useState } from "react";

const useSelectedClasses = () => {
  const [selectedClasses, setSelectedClasses] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:5000/selectedclasses")
      .then(res => res.json())
      .then((data) => {
        console.log(data);
        setSelectedClasses(data);
        setLoading(false);
      });
  }, []);
  return [selectedClasses, loading];
};
export default useSelectedClasses;
