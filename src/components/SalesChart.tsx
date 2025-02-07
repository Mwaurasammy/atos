import React from "react";
import { Bar } from "react-chartjs-2";
import { useProductStore } from "../store/useProductStore";

const SalesChart = () => {
  const { cart } = useProductStore();
  const productNames = cart.map((p) => p.title);
  const productSales = cart.map((p) => p.price);

  const data = {
    labels: productNames,
    datasets: [
      {
        label: "Sales ($)",
        data: productSales,
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  };

  return (
    <div>
      <h2>Sales Overview</h2>
      <Bar data={data} />
    </div>
  );
};

export default SalesChart;
