import { useEffect, useState } from "react";

const useMediaQuery = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768)
  }, [])


  return isMobile
}

export default useMediaQuery;