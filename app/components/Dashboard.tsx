"use client"

import { Card, CardContent } from "@/components/ui/card"
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

    const  calendarEvents = [
        { date: 2, guest: "Ayanokoji Kiyotaka", nights: 2, guests: 2 },
        { date: 2, guest: "Ayanokoji Kiyotaka", nights: 2, guests: 2 },
        { date: 2, guest: "Ayanokoji Kiyotaka", nights: 2, guests: 2 },
    ]

    const renderDashboard = () => (
        <>
         <div className="flex justify-end mb-4">
            <p className="text-sm text-gray-600">Jan // 14, 2019</p>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6">

            <Card>
                <CardContent className="p-4 flex items-center">
                    <div className="bg-blue-50 p-3 rounded-b-full mr-4">
                        <svg xmlns="" className="h-6 w-6 text-blue-500" width="24" height="24"
                        viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">

                            <path d="M5 12h14"></path>
                            <path d="M12 517 7-7 7"></path>
                        </svg>
                    </div>

                    <div>
                        <p className="text-sm text-gray-500">
                            Arrival <span className="text-xs">(This Week)</span>
                        </p>

                        <div className="flex items-center">
                            <h3 className="text-2xl font-bold mr-2">73</h3>
                            <span className="text-xs px-1.5 py-0.5 bg-red-100 text-green-600 rounded">52+</span>
                        </div>

                        <p className="text-xs text-gray-500">Previous Week</p>
                    </div>
                </CardContent>
            </Card>



            <Card>
                <CardContent className="p-4 flex items-center">
                    <div className="bg-amber-50 p-3 rounded-full mr-4">
                        <svg xmlns="" className="h-6 w-6 text-blue-500" width="24" height="24"
                        viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">

                            <path d="M19 12h5"></path>
                            <path d="M12 191 7-7 7"></path>
                        </svg>
                    </div>

                    <div>
                        <p className="text-sm text-gray-500">Departure <span className="text-xs">(This Week)</span></p>

                        <div className="flex items-center">
                            <h3 className="text-2xl font-bold mr-2">40</h3>
                            <span className="text-xs px-1.5 py-0.5 bg-red-100 text-red-600 rounded">12%</span>
                        </div>

                        <p className="text-xs text-gray-500">Previous Week</p>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardContent className="p-4 flex items-center">
                    <div className="bg-amber-50 p-3 rounded-full mr-4">
                        <svg xmlns="" className="h-6 w-6 text-blue-500" width="24" height="24"
                        viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">

                            <path d="M19 12h5"></path>
                            <path d="M12 191 7-7 7"></path>
                        </svg>
                    </div>

                    <div>
                        <p className="text-sm text-gray-500">Departure <span className="text-xs">(This Week)</span></p>

                        <div className="flex items-center">
                            <h3 className="text-2xl font-bold mr-2">40</h3>
                            <span className="text-xs px-1.5 py-0.5 bg-red-100 text-red-600 rounded">12%</span>
                        </div>

                        <p className="text-xs text-gray-500">Previous Week: 187</p>
                    </div>
                </CardContent>
            </Card>
            
            <Card>
                <CardContent className="p-4">
                    <p className="text-sm text-gray-500 mb-2">Today Activity</p>
                    <div className="flex justify-between mb-2">
                        <div className="text-center">
                            <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-1">

                            </div>
                        </div>
                    </div>
                </CardContent>
                
                </Card>            
         </div>
        </>
    )



    return(
        <div>

        </div>
    )
}