# W07D03 - Immutable Update Patterns

### To Do
- [x] Recap: Components, Props, and State
- [x] Immutable Update Patterns with Arrays and Objects
- [x] Updating Complex State


```jsx
1. {props.selected && props.name}
2. {props.selected && <>props.name</>}
3. {props.selected && <>{props.name}</>}
```

```jsx
<DayList
  days={days}
  day={day}
  setDay={(day) => { setDay(day) }}
/>

<DayListItem 
  day={day}
  setDay={() => props.setDay(day)}
/>

props.setDay();
```














