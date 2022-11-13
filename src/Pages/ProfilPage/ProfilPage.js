import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./ProfilPage.css";
import CardKeyData from "../../Components/CardKeyData/CardKeyData";
import appleIcon from "../../Assets/apple_icon.svg";
import chickenIcon from "../../Assets/chicken_icon.svg";
import energyIcon from "../../Assets/energy_icon.svg";
import cheeseburgerIcon from "../../Assets/cheeseburger_icon.svg";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  RadialBarChart,
  RadialBar,
} from "recharts";

import AutoSizer from "react-virtualized-auto-sizer";

import {
  getUserInfos,
  getUserActivity,
  getUserAverageSessions,
  getUserPerformance,
} from "../../Service/service";

/**
 * Component for showing user profil
 *
 * @component
 */
const ProfilPage = () => {
  const [profil, setProfil] = useState(null);
  const [activity, setActivity] = useState(null);
  const [averageSessions, setAverageSessions] = useState(null);
  const [performance, setPerformance] = useState(null);

  let { id } = useParams(); // profil id

  useEffect(() => {
    getUserInfos(id, id === "12").then((data) => setProfil(data));
    getUserActivity(id, id === "12").then((data) => setActivity(data));
    getUserAverageSessions(id, id === "12").then((data) =>
      setAverageSessions(data)
    );
    getUserPerformance(id, id === "12").then((data) => setPerformance(data));
  }, [id]);

  return (
    <div className="profil">
      {profil && (
        <>
          <div className="profil__presentation">
            <h1>
              Bonjour <span>{profil.userInfos.firstName}</span>
            </h1>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            <Link
              reloadDocument={true}
              to={`/profil/${id === "12" ? "18" : "12"}`}
            >{`Switch vers ${id === "12" ? "API" : "MOCK"}`}</Link>
          </div>
          <div className="profil__content">
            <div className="profil__keydata">
              <CardKeyData
                icon={energyIcon}
                backgroundImageColor="rgba(255, 0, 0, 0.1)"
                title="Calories"
                value={`${profil.keyData.calorieCount}kCal`}
              />
              <CardKeyData
                icon={chickenIcon}
                backgroundImageColor="rgba(74, 184, 255, 0.1)"
                title="Proteines"
                value={`${profil.keyData.proteinCount}g`}
              />
              <CardKeyData
                icon={appleIcon}
                backgroundImageColor="rgba(249, 206, 35, 0.1)"
                title="Glucides"
                value={`${profil.keyData.carbohydrateCount}g`}
              />
              <CardKeyData
                icon={cheeseburgerIcon}
                backgroundImageColor="rgba(253, 81, 129, 0.1)"
                title="Lipides"
                value={`${profil.keyData.lipidCount}g`}
              />
            </div>
            <div className="profil__chart">
              {activity && (
                <div className="profil__chart__bar">
                  <p className="profil__chart__bar-title">
                    Activité quotidienne
                  </p>
                  <AutoSizer>
                    {({ width, height }) => (
                      <BarChart
                        data={activity}
                        barSize={10}
                        barGap={10}
                        width={width}
                        height={height}
                      >
                        <CartesianGrid strokeDasharray="2" vertical={false} />
                        <XAxis
                          dataKey="day"
                          tickLine={false}
                          tickSize={20}
                          stroke="rgba(155, 158, 172, 1)"
                        ></XAxis>
                        <YAxis
                          orientation="right"
                          tickLine={false}
                          axisLine={false}
                          tickSize={20}
                          stroke="rgba(155, 158, 172, 1)"
                        />

                        <Legend
                          verticalAlign="top"
                          height={50}
                          iconType="circle"
                          iconSize={8}
                          align="right"
                          formatter={(value) => {
                            return (
                              <span className="profil__chart__bar-legend">
                                {value}
                              </span>
                            );
                          }}
                        />

                        <Tooltip
                          contentStyle={{
                            background: "rgba(230, 0, 0, 1)",
                          }}
                          itemStyle={{
                            color: "white",
                            fontSize: "0.6em",
                          }}
                          offset={50}
                          labelFormatter={() => {
                            return "";
                          }}
                          formatter={(value) => {
                            return [value];
                          }}
                        />
                        <Bar
                          name="Poids (kg)"
                          dataKey="kilogram"
                          fill="rgba(40, 45, 48, 1)"
                          unit="kg"
                        />
                        <Bar
                          name="Calories brûlées (kCal)"
                          dataKey="calories"
                          fill="rgba(230, 0, 0, 1)"
                          unit="kCal"
                        />
                      </BarChart>
                    )}
                  </AutoSizer>
                </div>
              )}

              {averageSessions && (
                <div className="profil__chart__line">
                  <AutoSizer>
                    {({ width, height }) => (
                      <LineChart
                        data={averageSessions}
                        margin={{ top: 0, right: 20, bottom: 0, left: 20 }}
                        width={width}
                        height={height}
                      >
                        <defs>
                          <linearGradient id="colorUv">
                            <stop
                              offset="0%"
                              stopColor="#FFFFFF"
                              stopOpacity={0.4}
                            />
                            <stop offset="100%" stopColor="#FFFFFF" />
                          </linearGradient>
                        </defs>
                        <XAxis
                          dataKey="day"
                          axisLine={false}
                          tickLine={false}
                          stroke="rgba(255,255,255, 0.4)"
                          tickSize={20}
                          height={50}
                          minTickGap={1}
                        ></XAxis>
                        <Tooltip
                          contentStyle={{
                            background: "#FFFFFF",
                          }}
                          cursor={false}
                          itemStyle={{
                            color: "black",
                            fontSize: "0.6em",
                          }}
                          labelFormatter={() => {
                            return "";
                          }}
                          formatter={(value) => {
                            return [value];
                          }}
                        />
                        <Legend
                          iconSize={0}
                          margin={{ left: 40, right: 0, top: 0, bottom: 0 }}
                          verticalAlign="top"
                          align="left"
                          formatter={(value) => {
                            return (
                              <div className="profil__chart__line-legend">
                                {value}
                              </div>
                            );
                          }}
                        />
                        <Line
                          name="Durée moyenne des sessions"
                          type="monotone"
                          dataKey="sessionLength"
                          stroke="url(#colorUv)"
                          dot={false}
                          activeDot={{
                            fill: "white",
                          }}
                          unit=" min"
                          strokeWidth={3}
                        />
                      </LineChart>
                    )}
                  </AutoSizer>
                </div>
              )}

              {performance && (
                <div className="profil__chart__radar">
                  <AutoSizer>
                    {({ width, height }) => (
                      <RadarChart
                        data={performance}
                        margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
                        width={width}
                        height={height}
                      >
                        <PolarGrid stroke="white" />
                        <PolarAngleAxis
                          dataKey="kind"
                          stroke="white"
                          axisLine={false}
                          tickLine={false}
                          tickSize={10}
                          style={{ fontSize: "0.8em" }}
                        />
                        <Radar
                          dataKey="value"
                          fill="rgb(255, 1, 1)"
                          fillOpacity={0.7}
                        />
                      </RadarChart>
                    )}
                  </AutoSizer>
                </div>
              )}

              <div className="profil__chart__radial">
                <AutoSizer>
                  {({ width, height }) => (
                    <RadialBarChart
                      cx="50%"
                      cy="50%"
                      barSize={12}
                      barCategoryGap={0}
                      outerRadius="50%"
                      innerRadius="80%"
                      startAngle={90}
                      endAngle={450}
                      barGap={0}
                      margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
                      data={[
                        {
                          name: "Score",
                          score: profil.todayScore
                            ? profil.todayScore
                            : profil.score,
                          fill: "#E60000",
                        },
                        {
                          score: 1,
                          fill: "white",
                        },
                      ]}
                      width={width}
                      height={height}
                    >
                      <RadialBar
                        background={{ fill: "#FBFBFB" }}
                        dataKey="score"
                        legendType="circle"
                        cornerRadius={50}
                      />

                      <Legend
                        iconSize={0}
                        layout="left"
                        verticalAlign="top"
                        align="center"
                        formatter={(value) => {
                          return (
                            <div className="profil__chart__radial-legend">
                              {value}
                            </div>
                          );
                        }}
                      />
                    </RadialBarChart>
                  )}
                </AutoSizer>
                <p className="profil__chart__radial-description">
                  <span>
                    {`${
                      (profil.todayScore ? profil.todayScore : profil.score) *
                      100
                    }%`}
                  </span>
                  de votre objectif
                </p>
              </div>
            </div>
          </div>
        </>
      )}
      {!profil && <div className="error-api">Api ne répond pas</div>}
    </div>
  );
};

export default ProfilPage;
