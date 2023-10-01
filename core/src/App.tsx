import { Group } from "@visx/group"
import { Bar } from "@visx/shape"

const DATA = [
  {
    category: "one",
    value: 10,
    color: "blueviolet",
  },
  {
    category: "two",
    value: 30,
    color: "aquamarine",
  },
  {
    category: "three",
    value: 15,
    color: "coral",
  },
]

export function App() {
  return (
    <svg width={1000} height={500}>
      <Group>
        {DATA.map(({ category, value, color }, index) => {
          const height = (value / 30) * 500
          const y = 500 - height

          return (
            <Bar
              key={category}
              x={index * 100}
              y={y}
              width={50}
              height={height}
              fill={color}
            />
          )
        })}
      </Group>
    </svg>
  )
}
