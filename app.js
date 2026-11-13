// 模擬行程資料：依日期分組
const itineraryData = [
    {
        date: "2027-01-14",
        dayLabel: "第1天",
        image: "S__23445508.jpg",
        items: [
            { time: "19:30", title: "抵達關西國際機場", note: "準備出關並領取 JR Pass" },
            { time: "21:00", title: "搭乘 HARUKA 抵達京都", note: "轉乘計程車前往飯店 Check-in" },
            { time: "21:30", title: "飯店周圍覓食", note: "尋找附近的拉麵或居酒屋，早點休息" }
        ]
    },
    {
        date: "2027-01-15",
        dayLabel: "第2天",
        image: "S__23445507.jpg",
        items: [
            {
                time: "06:00",
                title: "清水寺",
                note: "交通｜兩人從烏丸站搭計程車至「清水道」，約 10 分鐘，車資約 ¥1,200–¥1,500（平攤約每人 ¥600–¥750）。清晨公車班次少，搭車可省下步行時間。"
            },
            {
                time: "08:15",
                title: "前往金閣寺",
                note: "交通｜從「清水道」搭市營 207 公車至「四條烏丸」，轉乘地鐵烏丸線至「北大路站」，再搭市營 204 或 205 公車至「金閣寺道」。約 1 小時，每人約 ¥720。"
            },
            {
                time: "09:15",
                title: "金閣寺",
                note: "趁開門不久入場，沿參觀動線欣賞金閣與池中倒影，預計停留約 40–50 分鐘。"
            },
            {
                time: "10:15",
                title: "前往京都車站・午餐",
                note: "交通｜從金閣寺搭公車回「北大路站」，轉乘地鐵烏丸線直達「京都車站」，約 30 分鐘。建議在地下街 Porta 或伊勢丹百貨周邊用餐。"
            },
            {
                time: "12:30",
                title: "伏見稻荷大社",
                note: "交通｜從京都車站搭 JR 奈良線普通車至「稻荷站」，約 5 分鐘，每人約 ¥150。出站正對面就是大社入口；走訪千本鳥居、拍照後折返，保留體力。"
            },
            {
                time: "14:00",
                title: "前往奈良",
                note: "交通｜從 JR 稻荷站搭 JR 奈良線南下前往「JR 奈良站」，約 50–60 分鐘，每人約 ¥680。稻荷站僅普通車停靠；可搭普通車至「宇治站」再轉乘大和路快速，實際班次與月台請依車站資訊確認。"
            },
            {
                time: "15:00",
                title: "奈良・東大寺與餵鹿",
                note: "抵達 JR 奈良站後，從 2 號月台搭市區黃色公車前往「東大寺大佛殿」。參觀大佛後，再到周邊悠閒餵鹿。"
            }
        ]
    },
    {
        date: "2027-01-16",
        dayLabel: "第3天",
        image: "S__23445509.jpg",
        items: [
            {
                time: "約 08:00",
                title: "京都集合上車",
                note: "依訂單確認的集合時間與地點報到，搭乘一日遊巴士前往天橋立；實際出發時間以行前通知為準。"
            },
            {
                time: "約 11:00",
                title: "天橋立・傘松公園",
                note: "搭乘行程包含的天橋立纜車或吊椅前往展望台，欣賞日本三景之一的天橋立與「飛龍觀」。"
            },
            {
                time: "約 12:30",
                title: "天橋立散策與午餐",
                note: "在天橋立周邊自由散步、拍照並安排午餐；停留時間依當日團體行程為準。"
            },
            {
                time: "約 14:00",
                title: "伊根舟屋・伊根灣遊船",
                note: "搭乘行程包含的伊根灣觀光船，從海上欣賞沿岸舟屋；可使用行程贈送的蝦條餵海鷗。"
            },
            {
                time: "約 16:00",
                title: "集合返回大阪",
                note: "依導遊通知時間返回集合點，搭乘巴士前往大阪；集合時間以當日導遊公告為準。"
            },
            {
                time: "約 19:00",
                title: "大阪下車",
                note: "依你選擇的方案於大阪下車；實際抵達時間與下車地點請以訂單及行前通知為準。以上時間為規劃估算，可能因交通與當日安排調整。"
            }
        ]
    },
    {
        date: "2027-01-17",
        dayLabel: "第4天",
        image: "4.jpg",
        items: [
            {
                time: "約 09:00",
                title: "大阪城公園・天守閣",
                note: "先逛大阪城公園，再參觀天守閣與展望台，建議預留約 2–2.5 小時；入場時間與門票請出發前確認。"
            },
            {
                time: "約 12:00",
                title: "大阪天滿宮",
                note: "前往大阪天滿宮參拜、散步，停留約 30–45 分鐘。"
            },
            {
                time: "約 12:45",
                title: "天神橋筋商店街・午餐",
                note: "到鄰近的天神橋筋商店街用餐、逛街，感受大阪在地商店街氣氛。"
            },
            {
                time: "約 15:00",
                title: "三井 Outlet Park 大阪門真",
                note: "從大阪天滿宮一帶前往門真市，逛三井 Outlet Park 大阪門真及 LaLaport 門真。可從 JR 大阪天滿宮站搭至京橋，再轉京阪電車至門真市站步行前往；車程及營業時間請依當日確認。"
            },
            {
                time: "約 18:30",
                title: "晚餐・返回住宿",
                note: "在 Outlet／LaLaport 門真用餐後返回大阪住宿，時間可依逛街狀況彈性調整。"
            }
        ]
    },
    {
        date: "2027-01-18",
        dayLabel: "第5天",
        image: "S__23445511.jpg",
        items: [
            { time: "約 07:00", title: "從大阪住宿出發", note: "搭乘大眾運輸前往環球影城，預留交通與入園時間；實際路線依住宿地點及當日交通確認。" },
            { time: "依開園時間", title: "日本環球影城", note: "建議提早抵達，並事先確認當日營業時間、門票及熱門設施的整理券／預約方式。" },
            { time: "園區營業時段", title: "園內午餐與遊玩", note: "依設施排隊狀況彈性安排午餐、休息與園區活動。" },
            { time: "閉園後", title: "返回大阪住宿", note: "搭乘大眾運輸返回住宿休息；離園時間依當日營業時間為準。" }
        ]
    },
    {
        date: "2027-01-19",
        dayLabel: "第6天",
        image: "S__23494658 (2).jpg",
        items: [
            {
                time: "約 10:00",
                title: "前往空庭溫泉",
                note: "從大阪住宿出發，搭乘 JR 大阪環狀線至「弁天町站」，再依指標經連通道前往大阪 Bay Tower。"
            },
            {
                time: "約 11:00",
                title: "空庭溫泉 OSAKA BAY TOWER",
                note: "安排泡湯、岩盤浴與館內休息，建議預留約 3 小時。出發前請確認當日營業時間、入場方式及館內規定。"
            },
            {
                time: "約 14:00",
                title: "弁天町周邊午餐",
                note: "在大阪 Bay Tower 或弁天町周邊用餐、稍作休息。"
            },
            {
                time: "約 15:30",
                title: "難波・道頓堀散步",
                note: "搭車前往難波，逛道頓堀與心齋橋一帶，沿途拍照、購物並感受大阪市區氣氛。"
            },
            {
                time: "約 19:00",
                title: "大阪晚餐・返回住宿",
                note: "在難波附近享用晚餐，之後搭車返回住宿；時間可依逛街及用餐狀況彈性調整。"
            }
        ]
    },
    {
        date: "2027-01-20",
        dayLabel: "第7天",
        image: "S__23453700.jpg",
        items: [
            { time: "09:00", title: "最後一個早晨", note: "收拾行李與自由活動" },
            { time: "12:30", title: "午餐與返程準備", note: "提前整理退房與機場交通" },
            { time: "16:00", title: "搭機返國", note: "準備前往機場並出發" }
        ]
    }
];

function formatDateLabel(dateString) {
    const date = new Date(dateString + "T00:00:00");
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const weekday = ["日", "一", "二", "三", "四", "五", "六"][date.getDay()];
    return `${month}月${day}日（週${weekday}）`;
}

function createInfoCard(type, title, subtitle, details, linkLabel, linkUrl) {
    const card = document.createElement('div');
    card.className = `day-info-card ${type}`;

    const detailMarkup = details.map(detail => `
        <div class="info-item">
            <span class="info-label">${detail.label}</span>
            <span class="info-value">${detail.value}</span>
        </div>
    `).join('');

    const mapButtonMarkup = linkUrl ? `
        <a class="map-button" href="${linkUrl}" target="_blank" rel="noreferrer">${linkLabel}</a>
    ` : '';

    card.innerHTML = `
        <div class="info-header">
            <div>
                <div class="info-title">${title}</div>
                <div class="info-subtitle">${subtitle}</div>
            </div>
            ${mapButtonMarkup}
        </div>
        <div class="info-list">
            ${detailMarkup}
        </div>
    `;

    return card;
}

function createFlightTicketCard({ title, fromCity, toCity, fromAirport, toAirport, fromTerminal, toTerminal, departTime, arriveTime, airline, flightNo, cabin, baggage }) {
    const card = document.createElement('div');
    card.className = 'flight-ticket';

    card.innerHTML = `
        <div class="flight-header">
            <span>${title}</span>
            <span class="flight-arrow">›</span>
        </div>
        <div class="flight-body">
            <div class="flight-route">
                <div class="route-block">
                    <div class="route-label">出發地</div>
                    <div class="route-city">${fromCity}</div>
                    <div class="route-airport">${fromAirport}</div>
                    <div class="route-terminal">${fromTerminal}</div>
                    <div class="route-time">${departTime}</div>
                </div>

                <div class="route-arrow-sign">→</div>

                <div class="route-block">
                    <div class="route-label">抵達地</div>
                    <div class="route-city">${toCity}</div>
                    <div class="route-airport">${toAirport}</div>
                    <div class="route-terminal">${toTerminal}</div>
                    <div class="route-time">${arriveTime}</div>
                </div>
            </div>

            <div class="flight-meta">
                <div class="meta-item">
                    <span class="meta-dot"></span>
                    <span>航空</span>
                    <strong>${airline}</strong>
                </div>
                <div class="meta-item">
                    <span class="meta-dot"></span>
                    <span>航班</span>
                    <strong>${flightNo}</strong>
                </div>
                <div class="meta-item">
                    <span class="meta-dot"></span>
                    <span>座位</span>
                    <strong>${cabin}</strong>
                </div>
                <div class="meta-item">
                    <span class="meta-dot"></span>
                    <span>行李</span>
                    <strong>${baggage}</strong>
                </div>
            </div>

            <div class="airplane-mark">✈</div>
        </div>
    `;

    return card;
}

function createStayTicketCard({ title, city, hotel, address, roomType, checkIn, checkOut, mapUrl }) {
    const card = document.createElement('div');
    card.className = 'stay-ticket';

    card.innerHTML = `
        <div class="flight-header stay-header">
            <span>${title}</span>
            <a class="map-button" href="${mapUrl}" target="_blank" rel="noreferrer">地圖</a>
        </div>
        <div class="stay-body">
            <div class="stay-city">${city}</div>
            <div class="stay-info-box">
                <div class="stay-name">${hotel}</div>
                <div class="stay-address">${address}</div>
            </div>
            <div class="stay-detail-row">
                <div class="stay-detail-item">
                    <span class="detail-label">房型</span>
                    <span class="detail-value">${roomType}</span>
                </div>
                <div class="stay-detail-item">
                    <span class="detail-label">入住</span>
                    <span class="detail-value">${checkIn}</span>
                </div>
                <div class="stay-detail-item">
                    <span class="detail-label">退房</span>
                    <span class="detail-value">${checkOut}</span>
                </div>
            </div>
        </div>
    `;

    return card;
}

function renderItinerary() {
    const container = document.getElementById('itinerary-list');
    container.innerHTML = '';

    container.appendChild(createFlightTicketCard({
        title: '去程航班',
        fromCity: '台北',
        toCity: '大阪',
        fromAirport: '桃園機場',
        toAirport: '關西機場',
        fromTerminal: '第一航廈',
        toTerminal: '第一航廈',
        departTime: '15:40',
        arriveTime: '19:30',
        airline: '亞洲航空',
        flightNo: 'AK176',
        cabin: '1件托運',
        baggage: '25KG'
    }));

    itineraryData.forEach((dayGroup, index) => {
        const dayCard = document.createElement('div');
        const isOpen = index === 0;
        dayCard.className = `date-group ${isOpen ? 'open' : ''}`;
        dayCard.setAttribute('aria-expanded', String(isOpen));

        const dayImage = dayGroup.image || '';

        if (dayImage) {
            dayCard.classList.add('photo-date-card');
        }

        dayCard.innerHTML = `
            <div class="date-header" data-day-image="${dayImage}">
                <div class="day-meta">
                    <span class="date-text">${formatDateLabel(dayGroup.date)}</span>
                    <span class="day-index">${dayGroup.dayLabel}</span>
                </div>
                <div class="expand-indicator">${isOpen ? '收起' : '展開'}</div>
            </div>
            <div class="day-events">
                ${dayGroup.items.map(item => `
                    <div class="itinerary-card">
                        <div class="time-badge">${item.time}</div>
                        <h3 class="activity-title">${item.title}</h3>
                        <p class="activity-note">${item.note}</p>
                    </div>
                `).join('')}
            </div>
        `;

        const header = dayCard.querySelector('.date-header');
        if (dayImage) {
            header.style.backgroundImage = `linear-gradient(rgba(17,30,44,0.18), rgba(17,30,44,0.25)), url('${dayImage}')`;
            header.style.backgroundSize = 'cover';
            header.style.backgroundRepeat = 'no-repeat';
            header.style.color = '#ffffff';

            if (index === 4) {
                header.style.backgroundPosition = 'center 70%';
            } else {
                header.style.backgroundPosition = 'center';
            }

            const dateText = dayCard.querySelector('.date-text');
            const dayIndex = dayCard.querySelector('.day-index');
            if (dateText) dateText.style.color = '#ffffff';
            if (dayIndex) dayIndex.style.color = '#ffffff';
        }

        const dayEvents = dayCard.querySelector('.day-events');

        dayCard.addEventListener('click', () => {
            const isExpanded = dayCard.classList.toggle('open');
            dayCard.setAttribute('aria-expanded', String(isExpanded));
            dayEvents.style.maxHeight = isExpanded ? `${dayEvents.scrollHeight}px` : '0px';
            const indicator = dayCard.querySelector('.expand-indicator');
            if (indicator) {
                indicator.textContent = isExpanded ? '收起' : '展開';
            }
        });

        if (index === 0) {
            container.appendChild(createStayTicketCard({
                title: '住宿資訊',
                city: '京都住宿',
                hotel: 'MYSTAYS 京都四條酒店',
                address: '京都市中京區',
                roomType: '雙人房 / 2 晚',
                checkIn: '1/14 15:00',
                checkOut: '1/16 11:00',
                mapUrl: 'https://www.google.com/maps/place/MYSTAYS+%E4%BA%AC%E9%83%BD%E5%9B%9B%E6%A2%9D%E9%85%92%E5%BA%97/@35.0054538,135.7538227,15.7z/data=!4m11!3m10!1s0x6001089cdfc353ed:0xa89feabb2b4dd5fb!5m4!1s2027-01-14!2i2!4m1!1i2!8m2!3d35.0039263!4d135.7546146!16s%2Fg%2F1tgw9t9g?authuser=0&entry=ttu&g_ep=EgoyMDI2MTEwMy4wIKXMDSoASAFQAw%3D%3D'
            }));
        }

        container.appendChild(dayCard);
        dayEvents.style.maxHeight = isOpen ? `${dayEvents.scrollHeight}px` : '0px';

        if (index === 2) {
            container.appendChild(createStayTicketCard({
                title: '住宿資訊',
                city: '大阪住宿',
                hotel: '日興-通天閣 Nikko Tsutenkaku Hotel',
                address: '大阪市浪速區',
                roomType: '雙人房 / 4 晚',
                checkIn: '1/17 15:00',
                checkOut: '1/20 11:00',
                mapUrl: 'https://www.google.com/maps/place/Nikko+Tsutenkaku/@34.651008,135.5002397,18.02z/data=!3m1!5s0x6000e761bd54ec49:0x90dc48fc629e9d98!4m11!3m10!1s0x6000e76b85226a9b:0xfffb53c433bcb11!5m4!1s2027-01-14!2i2!4m1!1i2!8m2!3d34.6509753!4d135.5028671!16s%2Fg%2F11zfb9skqx?authuser=0&entry=ttu&g_ep=EgoyMDI2MTEwNC4wIKXMDSoASAFQAw%3D%3D'
            }));
        }
    });

    container.appendChild(createFlightTicketCard({
        title: '回程航班',
        fromCity: '大阪',
        toCity: '台北',
        fromAirport: '關西機場',
        toAirport: '桃園機場',
        fromTerminal: '第一航廈',
        toTerminal: '第一航廈',
        departTime: '20:55',
        arriveTime: '23:15',
        airline: '亞洲航空',
        flightNo: 'AK177',
        cabin: '1件托運',
        baggage: '25KG'
    }));
}

document.addEventListener('DOMContentLoaded', renderItinerary);

const installButton = document.getElementById('install-app');
let installPrompt = null;

window.addEventListener('beforeinstallprompt', event => {
    event.preventDefault();
    installPrompt = event;
});

window.addEventListener('appinstalled', () => {
    installPrompt = null;
    installButton.hidden = true;
});

installButton.addEventListener('click', async () => {
    if (installPrompt) {
        const promptEvent = installPrompt;
        installPrompt = null;

        try {
            await promptEvent.prompt();
            const choice = await promptEvent.userChoice;
            if (choice.outcome === 'accepted') {
                installButton.hidden = true;
            }
        } catch (error) {
            console.error('無法開啟安裝提示：', error);
        }

        return;
    }

    if (window.matchMedia('(display-mode: standalone)').matches) {
        window.alert('此行程已安裝在主畫面。');
    } else if (/iphone|ipad|ipod/i.test(navigator.userAgent)) {
        window.alert('在 Safari 中點選「分享」按鈕，再選擇「加入主畫面」。');
    } else {
        window.alert('請從瀏覽器選單選擇「安裝應用程式」或「加到主畫面」。');
    }
});

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./service-worker.js').catch(error => {
            console.error('離線支援註冊失敗：', error);
        });
    });
}