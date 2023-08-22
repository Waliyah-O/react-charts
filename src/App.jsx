import { Bar } from "react-chartjs-2";
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import "./App.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function App() {
  const option = {
    responsive: true,
    plugins: {
      legend: { position: "chartArea" },
      title: {
        display: true,
        text: "Modular Bar Chart",
      },
    },
  };

  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Product A",
        data: [15, 20, 25, 40, 45, 80],
        backgroundColor: "hsla(255, 64%, 66%, 1)",
      },
      {
        label: "Product B",
        data: [15, 20, 25, 40, 45, 100],
        backgroundColor: "hsla(255, 64%, 66%, 1)",
      },
    ],
  };

  return (
    <>
      <div style={{height: '50vh', width: '100vh', border: '2px solid red'}}>
        <Bar options={option} data={data} />
      </div>
    </>
  );
}

export default App;
