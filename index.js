


(function() {

// 時間フィールドの選択肢追加
$datePicker = document.getElementById('date-pick')
$timePickers = document.getElementsByClassName('time-pick')
Array.from($timePickers).forEach(function($el) {
    for(let i=0;i<25;i++) {
        $option = document.createElement('option')
        $option.textContent = `${i}:00`
        $el.appendChild($option)
    }
})


function test() {
    console.log($datePicker.value)
    Array.from($timePickers).forEach(function($el) {
        console.log($el.value)
    })

}

// コピー機能の追加
$textArea = document.getElementById('text-area')
$copyBtn = document.getElementById('copy-btn')
$inputBtn = document.getElementById('input-btn')
$copyBtn.addEventListener('click', function(e) {
    e.preventDefault()
    $textArea.select()
    navigator.clipboard.writeText($textArea.value)
})

$inputBtn.addEventListener('click', function(e) {
    
    e.preventDefault()

    date_arr = $datePicker.value.split('-')
    if(date_arr.length == 3) {
        month = Number(date_arr[1])
        day = Number(date_arr[2])
        const target_date = new Date($datePicker.value)
        const weekday_num = target_date.getDay()
        const weekdayList = [ "日", "月", "火", "水", "木", "金", "土" ]
    
        time_from = $timePickers[0].value
        time_to = $timePickers[1].value
        $textArea.value=`${month}/${day}(${weekdayList[weekday_num]}) ${time_from}-${time_to}`
    }
})

})()