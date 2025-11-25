import { LineChart } from "@mui/x-charts"
import { useEffect, useState } from "react"
import { getTickets } from "../hooks/getTickets"

export const TotalAmount = () => {
  const [amountFilter, setAmountFilter] = useState([])

  useEffect(() => {
    const fetchTickets = async () => {
      const getTick = await getTickets()
      const tickets = getTick
      const amountPerMonth = Array(12).fill(0)
      tickets.forEach((ticket) => {
        const getDate = ticket.date.split('/')
        if (ticket.ticketType == "Venta") {
          const month = getDate[1] - 1
          amountPerMonth[month] += ticket.total
        } else {
          const month = getDate[1] - 1
          amountPerMonth[month] -= ticket.total
        }
      });
      setAmountFilter(amountPerMonth)
    }
    fetchTickets()
  }, [])
  return (
    <LineChart
      xAxis={[{ scaleType: 'point', data: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'] }]}
      series={[{ data: amountFilter, color: "violet" }]}
      height={300}
    />
  )
}
