import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Impact.css";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

function Impact() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const data = [
    { name: "Education", value: 70 },
    { name: "Food", value: 85 },
    { name: "Health", value: 60 },
  ];

  const COLORS = ["#facc15", "#22c55e", "#3b82f6"];

  return (
    <section className="impact" id="impact">
      <div className="impact-content" data-aos="fade-up">
        <h2>Our Ongoing Mission</h2>
        <p>
          Each contribution helps us move closer to our goals — your kindness
          fuels every meal, every lesson, every smile.
        </p>

        {/* Chart Section */}
        <div className="chart-container" data-aos="zoom-in">
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="95%"  // lowered the arc
                startAngle={180}
                endAngle={0}
                innerRadius={70}
                outerRadius={110}
                paddingAngle={3}
                dataKey="value"
                labelLine={false}
                label={({ value }) => `${value}%`}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend verticalAlign="bottom" align="center" iconType="circle" />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Impact Cards */}
        <div className="impact-stats" data-aos="fade-up">
          <div className="impact-card">
            <h3>50,000+</h3>
            <p>Meals Served</p>
          </div>
          <div className="impact-card">
            <h3>2,000+</h3>
            <p>Children Educated</p>
          </div>
          <div className="impact-card">
            <h3>1,200+</h3>
            <p>Health Checkups</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Impact;
