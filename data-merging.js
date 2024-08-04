
// https://www.greatfrontend.com/questions/javascript/data-merging

/**
 * @param {Array<{user: number, duration: number, equipment: Array<string>}>} sessions
 * @return {Array}
 */
export default function mergeData(sessions) {
  const result = [];
  const mp = new Map();

  sessions.forEach(session => {
    if(mp.has(session.user)){
      const userSession = mp.get(session.user);
      userSession.duration += session.duration;
      session.equipment.forEach(equip => userSession.equipment.add(equip));
    }else{
      const clonedSession = {
        ...session,
        equipment : new Set(session.equipment)
      }
      mp.set(session.user, clonedSession);
      result.push(clonedSession);
    }
  })

  return result.map(session => ({
    ...session,
    equipment : Array.from(session.equipment).sort()
  }))
}