import axios from "axios"
import { useState } from "react"
import { useHistory } from "react-router"

const Deliverylogout = () => {

    localStorage.removeItem("deliveryBoy")
    
    window.location="/deliverylogin"
    
}
export default Deliverylogout;