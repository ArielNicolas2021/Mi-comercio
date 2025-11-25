import { BarChart } from '@mui/x-charts'
import { getTickets } from '../hooks/getTickets'
import { useState, useEffect } from 'react'

export const TotalTickets = () => {
  const [ticketsFilter, setTicketsFilter] = useState([])

  useEffect(() => {
    const fetchTickets = async () => {
      const getTick = await getTickets()
      const tickets = getTick
      const ticketsPerMonth = Array(12).fill(0)
      tickets.forEach((ticket) => {
        const getDate = ticket.date.split('/')
        if (ticket.ticketType == "Venta") {
          const month = getDate[1] - 1
          ticketsPerMonth[month] += 1
        } else {
          const month = getDate[1] - 1
          ticketsPerMonth[month] -= 1
        }
      })
      setTicketsFilter(ticketsPerMonth)
    }
    fetchTickets()
  }, [])

  return (
    <>
      <BarChart
        xAxis={[{ data: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'] }]}
        series={[{ data: ticketsFilter }]}
        height={300}
      />
    </>
  )
}
