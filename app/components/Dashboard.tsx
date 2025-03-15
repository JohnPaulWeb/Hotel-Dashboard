"use client"

import { useEffect, useState } from "react"

// import { useToast } from ""

export default function Dashboard() {

    const [activeTab, setActiveTab] = useState("stays")
    const [activeSection, setActiveSection] = useState("dashboard")
    const [isMobile, setIsMobile] = useState(false)
    const [sidebarOpen, setSidebarOpen] = useState(false)
    // const { toast } = useToast() 

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768)
        }

        handleResize()
        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    const revenueData = [
        { name: "Sun", value: 8 },
        { name: "Mon", value: 8 },
        { name: "Tue", value: 8 },
        { name: "Wed", value: 8 },
        { name: "Thu", value: 8 },
        { name: "Fri", value: 8 },
        { name: "Sat", value: 8 },
    ]

    const guestsData = [
        { name: "Sun", value: 8000 },
        { name: "Mon", value: 8000 },
        { name: "Tue", value: 8000 },
        { name: "Wed", value: 8000 },
        { name: "Thu", value: 8000 },
        { name: "Fri", value: 8000 },
    ]

    const roomsData = [
        { name: "Sun", occupied: 15, booked: 10, available: 25},
        { name: "Mon", occupied: 15, booked: 10, available: 25},
        { name: "Tue", occupied: 15, booked: 10, available: 25},
        { name: "Wed", occupied: 15, booked: 10, available: 25},
        { name: "Thu", occupied: 15, booked: 10, available: 25},
        { name: "Fri", occupied: 15, booked: 10, available: 25},
        { name: "Sat", occupied: 15, booked: 10, available: 25},
    ]


    const foodOrdersData = [
        { name: "Breakfast", value: 35 },
        { name: "Lunch", value: 8 },
        { name: "Dinner", value: 8 },
        { name: "Room Service", value: 8 },
    ]

    const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"]

    const bookingData = [
        {
            id: 1,
            name: "Ayanokoji",
            phone: "09343847384",
            bookingId: "yasuo123",
            nights: "2",
            roomType: "1st Room",
            guests: 2,
            paid: "25.50",
            cost: "50.00",
            avatar: "",
        },

        {
            id: 2,
            name: "Ayanokoji",
            phone: "09343847384",
            bookingId: "yasuo123",
            nights: "2",
            roomType: "1st Room",
            guests: 2,
            paid: "25.50",
            cost: "50.00",
            avatar: "",
        },

        {
            id: 3,
            name: "Ayanokoji",
            phone: "09343847384",
            bookingId: "yasuo123",
            nights: "2",
            roomType: "1st Room",
            guests: 2,
            paid: "25.50",
            cost: "50.00",
            avatar: "",
        },

        {
            id: 4,
            name: "Ayanokoji",
            phone: "09343847384",
            bookingId: "yasuo123",
            nights: "2",
            roomType: "1st Room",
            guests: 2,
            paid: "25.50",
            cost: "50.00",
            avatar: "",
        },
    ]

    const foodOrders = [
        {
            id: "Zone",
            guests: "Ayanokoji",
            room: "10",
            items: ["Chicken Curry", "Dinakdakan", "Sisig"],
            total: "20.22",
            status: "Delivered",
            time: "11:40 PM",
        },

        {
            id: "Zone",
            guests: "Ayanokoji",
            room: "10",
            items: ["Chicken Curry", "Dinakdakan", "Sisig"],
            total: "20.22",
            status: "Delivered",
            time: "11:40 PM",
        },

        {
            id: "Zone",
            guests: "Ayanokoji",
            room: "10",
            items: ["Chicken Curry", "Dinakdakan", "Sisig"],
            total: "20.22",
            status: "Delivered",
            time: "11:40 PM",
        },
    ]

    const invoices = [
        {
            id: "Zone",
            guests: "Ayanokoji",
            date: "Jan 15 2019",
            items: ["Chicken Curry", "Dinakdakan", "Sisig"],
            total: "20.22",
            status: "Delivered",
            items: [
                { description: "Room For Room", amount: "89.00" },
                { description: "Room For Room", amount: "89.00" },
            ],
        },
    ]



    return(
        <div>

        </div>
    )
}