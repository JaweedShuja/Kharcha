const data = {
    labels: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    datasets: [
        {
            data: [ 50, 20, 2, 50, 71, 100, 22 ],
            color: () => `#66BB6A` // optional
        },
        {
            data: [ 20, 10, 4, 56, 87, 90, 15 ],
            color: () => `#EF5350` // optional
        },
    ]
}


  export { data }
