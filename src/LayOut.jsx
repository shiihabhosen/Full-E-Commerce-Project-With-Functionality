import { Outlet } from "react-router"
import Navber from "./Component/Navber"
import Fotter from "./Component/Fotter"
import OverText from "./Component/OverText"


const LayOut = () => {
    return (
        <>
            <OverText />
            <Navber />
            <Outlet />
            <Fotter />
        </>
    )
}

export default LayOut
