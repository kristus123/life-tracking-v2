const h = [
  {label: "deadlift", date: "2022-02-02", sets: 3, reps: 12, kg: 45},
  {label: "deadlift", date: "2022-02-04", sets: 3, reps: 12, kg: 50},
  {label: "deadlift", date: "2022-02-06", sets: 3, reps: 12, kg: 60},
  {label: "deadlift", date: "2022-03-06", sets: 3, reps: 12, kg: 70},
]

const complete = []
for (let i = 0 ; i < h.length ; i++) {
  if (i == h.length - 1) {
    break
  }

  const startDate = new Date(h[i].date)
  const endDate = new Date(h[i+1].date)

  const date = new Date(startDate.getTime());
  while (date < endDate) {
    const [withoutTime] = date.toISOString().split('T');
    complete.push({
      label: h[i].label,
      date: withoutTime,
      sets: h[i].sets,
      reps: h[i].reps,
      kg: h[i].kg,
    });

    date.setDate(date.getDate() + 1);
  }
}

export default defineNuxtPlugin(() => {
  return {
    provide: {
      hello: () => complete
    }
  }
})