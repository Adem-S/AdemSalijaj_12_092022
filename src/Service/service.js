import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from "../Mock/data.js";

/**
 * @description Retrieve the main user info (first name, last name, today score)
 * @constructor
 * @param {string} userId
 * @param {boolean} useMock
 * @return {object}
 */
export const getUserInfos = async (userId, useMock) => {
  if (useMock) {
    let data = USER_MAIN_DATA.find((e) => e.id == userId);
    return data;
  } else {
    const response = await fetch(`http://localhost:3000/user/${userId}`);
    if (!response.ok) {
      return "error";
    } else {
      let { data } = await response.json();
      return data;
    }
  }
};

/**
 * @description Retrieve user activity
 * @constructor
 * @param {string} userId
 * @param {boolean} useMock
 * @return {object}
 */
export const getUserActivity = async (userId, useMock) => {
  let activitySessions;
  if (useMock) {
    let data = USER_ACTIVITY.find((e) => e.userId == userId);
    activitySessions = data.sessions;
  } else {
    const response = await fetch(
      `http://localhost:3000/user/${userId}/activity`
    );
    if (!response.ok) {
      return "error";
    } else {
      let { data } = await response.json();
      activitySessions = data.sessions;
    }
  }
  activitySessions = activitySessions.map((a) => {
    return {
      day: new Date(a.day).getDate(),
      kilogram: a.kilogram,
      calories: a.calories,
    };
  });
  return activitySessions;
};

/**
 * @description Retrieve user average sessions
 * @constructor
 * @param {string} userId
 * @param {boolean} useMock
 * @return {array}
 */
export const getUserAverageSessions = async (userId, useMock) => {
  const daysOfWeek = ["L", "M", "M", "J", "V", "S", "D"];
  let sessions;
  if (useMock) {
    let data = USER_AVERAGE_SESSIONS.find(
      (element) => element.userId == userId
    );
    sessions = data.sessions;
  } else {
    const response = await fetch(
      `http://localhost:3000/user/${userId}/average-sessions`
    );
    if (!response.ok) {
      return "error";
    } else {
      let { data } = await response.json();
      sessions = data.sessions;
    }
  }
  sessions = sessions.map((d, i) => {
    return { day: (d.day = daysOfWeek[i]), sessionLength: d.sessionLength };
  });
  return sessions;
};

/**
 * @description Retrieve user performance
 * @constructor
 * @param {string} userId
 * @param {boolean} useMock
 * @return {array}
 */
export const getUserPerformance = async (userId, useMock) => {
  let data;
  if (useMock) {
    data = USER_PERFORMANCE.find((e) => e.userId == userId);
  } else {
    const response = await fetch(
      `http://localhost:3000/user/${userId}/performance`
    );
    if (!response.ok) {
      return "error";
    } else {
      let responseToJson = await response.json();
      data = responseToJson.data;
    }
  }
  let array = data.data.reduce((p, n) => {
    return p.concat({ ...n, kind: data.kind[n.kind] });
  }, []);
  return array;
};
