// 個別行程可設定 mapUrl: "Google 地圖分享連結"，未設定時不顯示地圖按鈕。
// 模擬行程資料：依日期分組
const itineraryData = [
    {
        date: "2027-01-14",
        dayLabel: "第1天",
        image: "S__23445508.jpg",
        items: [
            { time: "19:30", title: "抵達關西國際機場",mapUrl: "https://maps.google.com/?q=關西國際機場", note: "準備出關並領取 JR Pass" },
            { time: "21:00", title: "搭乘 HARUKA 抵達京都",mapUrl: "https://maps.app.goo.gl/Xk5orMkUyPeZoVuS9", note: "轉乘計程車前往飯店 Check-in" },
            { time: "21:30", title: "飯店周圍覓食",mapUrl:"https://maps.app.goo.gl/qdaBxzLx2WKMHYCSA", note: "尋找附近的拉麵或居酒屋，早點休息" }
        ]
    },
    {
        date: "2027-01-15",
        dayLabel: "第2天",
        image: "S__23445507.jpg",
        items: [
            {
                time: "08:30",
                title: "前往金閣寺",
                mapUrl:"https://maps.app.goo.gl/om3fsdmmBEjM2qhc9",
                note: "交通｜從「清水道」搭市營 207 公車至「四條烏丸」，轉乘地鐵烏丸線至「北大路站」，再搭市營 204 或 205 公車至「金閣寺道」。約 1 小時，每人約 ¥720。"
            },
            {
                time: "09:15",
                title: "金閣寺",
                note: "趁開門不久入場，沿參觀動線欣賞金閣與池中倒影，預計停留約 40–50 分鐘。"
            },
            {
                time: "10:00",
                title: "清水寺",
                mapUrl:"https://maps.app.goo.gl/RHHse6yVzB7aePgTA",
                note: "交通｜兩人從烏丸站搭計程車至「清水道」，約 10 分鐘，車資約 ¥1,200–¥1,500。清晨公車班次少，搭車可省下步行時間。"
            },
            {
                time: "11:00",
                title: "伏見稻荷大社",
                mapUrl:"https://maps.app.goo.gl/MAwCLSKUkfBDub5y6",
                note: "交通｜從京都車站搭 JR 奈良線普通車至「稻荷站」，約 5 分鐘，每人約 ¥150。出站正對面就是大社入口；走訪千本鳥居、拍照後折返，保留體力。"
            },
            {
                time: "12:00",
                title: "京都車站・午餐",
                mapUrl:"https://maps.app.goo.gl/VAcgTkyKLYmhYcg99",
                note: "交通｜從金閣寺搭公車回「北大路站」，轉乘地鐵烏丸線直達「京都車站」，約 30 分鐘。建議在地下街 Porta 或伊勢丹百貨周邊用餐。"
            },
            {
                time: "14:00",
                title: "前往奈良",
                mapUrl:"https://maps.app.goo.gl/W6i1RnUmrdrVdnmd6",
                note: "交通｜從 JR 稻荷站搭 JR 奈良線南下前往「JR 奈良站」，約 50–60 分鐘，每人約 ¥680。稻荷站僅普通車停靠；可搭普通車至「宇治站」再轉乘大和路快速，實際班次與月台請依車站資訊確認。"
            },
            {
                time: "15:00",
                title: "奈良・東大寺與餵鹿",
                note: "抵達 JR 奈良站後，從 2 號月台搭市區黃色公車前往「東大寺大佛殿」。參觀大佛後，再到周邊悠閒餵鹿。"
            },
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
                note: "於大阪下車；實際抵達時間與下車地點請以訂單及行前通知為準。以上時間為規劃估算，可能因交通與當日安排調整。"
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

    const header = document.querySelector('.app-header');
    const stickyHeaderHeight = header && getComputedStyle(header).position === 'sticky'
        ? header.getBoundingClientRect().height
        : 0;
    const collapseTimers = new WeakMap();
    const visibleItemsByDay = new WeakMap();
    const intersectionRatiosByItem = new WeakMap();
    const intersectionRatiosByCard = new WeakMap();
    const revealObserver = typeof IntersectionObserver === 'undefined' ? null : new IntersectionObserver(entries => {
        const affectedDays = new Set();
        entries.forEach(entry => {
            const card = entry.target;
            const visibleRatio = entry.isIntersecting ? entry.intersectionRatio : 0;
            if (card.classList.contains('itinerary-card')) {
                intersectionRatiosByItem.set(card, visibleRatio);
                const dayCard = card.closest('.date-group');
                const visibleItems = dayCard && visibleItemsByDay.get(dayCard);
                if (visibleItems) {
                    if (visibleRatio > 0) {
                        visibleItems.add(card);
                    } else {
                        visibleItems.delete(card);
                    }
                    affectedDays.add(dayCard);
                }
                return;
            }

            intersectionRatiosByCard.set(card, visibleRatio);
            if (card.classList.contains('date-group')) {
                affectedDays.add(card);
                return;
            }

            card.style.setProperty('--scroll-opacity', String(visibleRatio));
            card.classList.toggle('is-visible', visibleRatio > 0);
        });

        affectedDays.forEach(dayCard => {
            const groupRatio = intersectionRatiosByCard.get(dayCard) || 0;
            const visibleItems = visibleItemsByDay.get(dayCard);
            const hasVisibleItem = visibleItems?.size > 0;
            const isOnScreen = groupRatio > 0 || hasVisibleItem;
            let visibleRatio = groupRatio;
            if (dayCard.classList.contains('open') && visibleItems?.size > 1) {
                visibleRatio = 1;
            } else if (dayCard.classList.contains('open') && visibleItems?.size === 1) {
                visibleRatio = intersectionRatiosByItem.get(visibleItems.values().next().value) || 0;
            }
            dayCard.style.setProperty('--scroll-opacity', String(visibleRatio));
            dayCard.classList.toggle('is-visible', isOnScreen);

            const pendingCollapse = collapseTimers.get(dayCard);
            if (isOnScreen && pendingCollapse !== undefined) {
                clearTimeout(pendingCollapse);
                collapseTimers.delete(dayCard);
            } else if (!isOnScreen && dayCard.classList.contains('open') && pendingCollapse === undefined) {
                collapseTimers.set(dayCard, window.setTimeout(() => {
                    if (!dayCard.classList.contains('open') || dayCard.classList.contains('is-visible')) {
                        collapseTimers.delete(dayCard);
                        return;
                    }

                    dayCard.classList.remove('open');
                    dayCard.querySelector('.date-header').setAttribute('aria-expanded', 'false');
                    dayCard.querySelector('.day-events').style.maxHeight = '0px';
                    const indicator = dayCard.querySelector('.expand-indicator');
                    if (indicator) {
                        indicator.textContent = '展開';
                    }
                    stopObservingDayItems(dayCard);
                    collapseTimers.delete(dayCard);
                }, 220));
            }
        });
    }, {
        threshold: Array.from({ length: 101 }, (_, index) => index / 100),
        rootMargin: `-${stickyHeaderHeight}px 0px 0px 0px`
    });
    const observeDayItems = dayCard => {
        const visibleItems = new Set();
        visibleItemsByDay.set(dayCard, visibleItems);
        dayCard.querySelectorAll('.itinerary-card').forEach(item => {
            const bounds = item.getBoundingClientRect();
            if (bounds.bottom > stickyHeaderHeight && bounds.top < window.innerHeight) {
                visibleItems.add(item);
            }
            if (revealObserver) {
                revealObserver.observe(item);
            }
        });
    };
    const stopObservingDayItems = dayCard => {
        if (revealObserver) {
            dayCard.querySelectorAll('.itinerary-card').forEach(item => revealObserver.unobserve(item));
        }
        visibleItemsByDay.delete(dayCard);
    };
    const observeOnScreen = card => {
        if (revealObserver) {
            card.classList.add('scroll-reveal');
            revealObserver.observe(card);
        }
        return card;
    };

    container.appendChild(observeOnScreen(createFlightTicketCard({
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
    })));

    itineraryData.forEach((dayGroup, index) => {
        const dayCard = document.createElement('div');
        const isOpen = index === 0;
        dayCard.className = `date-group ${isOpen ? 'open' : ''}`;

        observeOnScreen(dayCard);

        const dayImage = dayGroup.image || '';

        if (dayImage) {
            dayCard.classList.add('photo-date-card');
        }

        dayCard.innerHTML = `
            <button class="date-header" type="button" data-day-image="${dayImage}" aria-expanded="${isOpen}" aria-controls="day-events-${index}">
                <span class="day-meta">
                    <span class="date-text">${formatDateLabel(dayGroup.date)}</span>
                    <span class="day-index">${dayGroup.dayLabel}</span>
                </span>
                <span class="expand-indicator">${isOpen ? '收起' : '展開'}</span>
            </button>
            <div class="day-events" id="day-events-${index}">
                ${dayGroup.items.map(item => `
                    <div class="itinerary-card">
                        <div class="itinerary-card-heading">
                            <div class="itinerary-card-main">
                                <div class="time-badge">${item.time}</div>
                                <h3 class="activity-title">${item.title}</h3>
                            </div>
                            ${item.mapUrl ? `<a class="map-button itinerary-map-button" href="${item.mapUrl}" target="_blank" rel="noopener noreferrer" aria-label="在 Google 地圖開啟：${item.title}">地圖</a>` : ''}
                        </div>
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

        header.addEventListener('click', () => {
            const isExpanded = dayCard.classList.toggle('open');
            const pendingCollapse = collapseTimers.get(dayCard);
            if (pendingCollapse !== undefined) {
                clearTimeout(pendingCollapse);
                collapseTimers.delete(dayCard);
            }
            header.setAttribute('aria-expanded', String(isExpanded));
            dayEvents.style.maxHeight = isExpanded ? `${dayEvents.scrollHeight}px` : '0px';
            if (isExpanded) {
                observeDayItems(dayCard);
                dayCard.style.setProperty('--scroll-opacity', '1');
            } else {
                stopObservingDayItems(dayCard);
                dayCard.style.setProperty('--scroll-opacity', String(intersectionRatiosByCard.get(dayCard) || 0));
            }
            const indicator = dayCard.querySelector('.expand-indicator');
            if (indicator) {
                indicator.textContent = isExpanded ? '收起' : '展開';
            }
        });

        if (index === 0) {
            container.appendChild(observeOnScreen(createStayTicketCard({
                title: '住宿資訊',
                city: '京都住宿',
                hotel: 'MYSTAYS 京都四條酒店',
                address: '京都市中京區',
                roomType: '雙人房 / 2 晚',
                checkIn: '1/14 15:00',
                checkOut: '1/16 11:00',
                mapUrl: 'https://www.google.com/maps/place/MYSTAYS+%E4%BA%AC%E9%83%BD%E5%9B%9B%E6%A2%9D%E9%85%92%E5%BA%97/@35.0054538,135.7538227,15.7z/data=!4m11!3m10!1s0x6001089cdfc353ed:0xa89feabb2b4dd5fb!5m4!1s2027-01-14!2i2!4m1!1i2!8m2!3d35.0039263!4d135.7546146!16s%2Fg%2F1tgw9t9g?authuser=0&entry=ttu&g_ep=EgoyMDI2MTEwMy4wIKXMDSoASAFQAw%3D%3D'
            })));
        }

        container.appendChild(dayCard);
        dayEvents.style.maxHeight = isOpen ? `${dayEvents.scrollHeight}px` : '0px';
        if (isOpen) {
            observeDayItems(dayCard);
            dayCard.style.setProperty('--scroll-opacity', '1');
        }

        if (index === 2) {
            container.appendChild(observeOnScreen(createStayTicketCard({
                title: '住宿資訊',
                city: '大阪住宿',
                hotel: '日興-通天閣 Nikko Tsutenkaku Hotel',
                address: '大阪市浪速區',
                roomType: '雙人房 / 4 晚',
                checkIn: '1/17 15:00',
                checkOut: '1/20 11:00',
                mapUrl: 'https://www.google.com/maps/place/Nikko+Tsutenkaku/@34.651008,135.5002397,18.02z/data=!3m1!5s0x6000e761bd54ec49:0x90dc48fc629e9d98!4m11!3m10!1s0x6000e76b85226a9b:0xfffb53c433bcb11!5m4!1s2027-01-14!2i2!4m1!1i2!8m2!3d34.6509753!4d135.5028671!16s%2Fg%2F11zfb9skqx?authuser=0&entry=ttu&g_ep=EgoyMDI2MTEwNC4wIKXMDSoASAFQAw%3D%3D'
            })));
        }
    });

    container.appendChild(observeOnScreen(createFlightTicketCard({
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
    })));
}

function setupPageNavigation() {
    const tabs = document.querySelectorAll('.page-tab');
    const pageSubtitle = document.querySelector('.subtitle');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const selectedPageId = tab.dataset.page;

            document.querySelectorAll('.page-panel').forEach(page => {
                page.hidden = page.id !== selectedPageId;
            });

            tabs.forEach(pageTab => {
                const isActive = pageTab === tab;
                pageTab.classList.toggle('is-active', isActive);
                if (isActive) {
                    pageTab.setAttribute('aria-current', 'page');
                } else {
                    pageTab.removeAttribute('aria-current');
                }
            });

            if (pageSubtitle) {
                pageSubtitle.textContent = selectedPageId === 'food-page'
                    ? '大阪・京都美食推薦'
                    : selectedPageId === 'draw-page'
                        ? '從已勾選的推薦中抽一間'
                        : '2027 冬季行程表';
            }

            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
}

function setupFoodSearch() {
    const searchInput = document.getElementById('food-search-input');
    const status = document.getElementById('food-search-status');

    if (!searchInput || !status) {
        return;
    }

    searchInput.addEventListener('input', () => {
        const keyword = searchInput.value.trim().toLocaleLowerCase();
        const searchTerms = keyword.includes('螃蟹')
            ? [keyword, '蟹', 'かに', 'カニ', 'crab']
            : [keyword];
        let visibleCount = 0;
        const cards = Array.from(document.querySelectorAll('#food-page .food-card'));

        cards.forEach(card => {
            const cardText = `${card.textContent} ${card.dataset.search || ''}`.toLocaleLowerCase();
            const matches = searchTerms.some(term => cardText.includes(term));
            card.hidden = !matches;
            if (matches) {
                visibleCount += 1;
            }
        });

        status.textContent = keyword
            ? visibleCount
                ? `找到 ${visibleCount} 間推薦`
                : '找不到相關推薦，請試試其他關鍵字。'
            : '';
    });
}

function setupFoodPicker() {
    const selectedCount = document.getElementById('draw-selection-count');
    const selectedList = document.getElementById('draw-selected-list');
    const drawButton = document.getElementById('draw-food-button');
    const clearButton = document.getElementById('clear-food-selection');
    const drawStatus = document.getElementById('draw-status');
    const drawResult = document.getElementById('draw-result');

    if (!selectedCount || !selectedList || !drawButton || !clearButton || !drawStatus || !drawResult) {
        return;
    }

    const getCards = () => Array.from(document.querySelectorAll('#food-page .food-card'));
    const getSelectedCards = () => getCards()
        .filter(card => card.querySelector('.food-select input')?.checked);
    const updateSelection = () => {
        const selectedCards = getSelectedCards();
        selectedCount.textContent = `目前選取 ${selectedCards.length} 間`;
        drawButton.disabled = selectedCards.length === 0;
        clearButton.disabled = selectedCards.length === 0;
        selectedList.replaceChildren(...selectedCards.map(card => {
            const item = document.createElement('li');
            const title = card.querySelector('h3').textContent.trim();
            const location = card.querySelector('.food-location').textContent.trim();
            item.textContent = `${title}（${location}）`;
            return item;
        }));
        drawStatus.textContent = '';
        drawResult.replaceChildren();
    };

    const setupCardSelections = () => {
        getCards().forEach((card, index) => {
            if (card.querySelector('.food-select')) return;
            const label = document.createElement('label');
            label.className = 'food-select';
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.setAttribute('aria-label', `將「${card.querySelector('h3').textContent.trim()}」加入抽選`);
            checkbox.id = `food-choice-${index}`;
            checkbox.addEventListener('change', updateSelection);
            const labelText = document.createElement('span');
            labelText.textContent = '想吃';
            label.append(checkbox, labelText);
            card.append(label);
        });
    };
    setupCardSelections();
    window.refreshFoodSelections = () => {
        setupCardSelections();
        updateSelection();
    };

    drawButton.addEventListener('click', () => {
        const selectedCards = getSelectedCards();
        if (selectedCards.length === 0) {
            return;
        }

        const drawStage = document.getElementById('draw-stage');
        const drawRoller = document.getElementById('draw-roller');
        if (!drawStage || !drawRoller) {
            return;
        }

        const pickedCard = selectedCards[Math.floor(Math.random() * selectedCards.length)];
        const pickedTitle = pickedCard.querySelector('h3').textContent.trim();
        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const steps = reduceMotion ? 4 : 18;

        drawButton.disabled = true;
        clearButton.disabled = true;
        drawResult.replaceChildren();
        drawStage.classList.remove('is-revealing');
        drawStage.classList.add('is-drawing');
        drawStatus.textContent = '抽選中……';

        let step = 0;
        const shuffle = () => {
            const candidate = selectedCards[Math.floor(Math.random() * selectedCards.length)];
            const title = candidate.querySelector('h3').textContent.trim();
            drawRoller.textContent = title;
            drawRoller.classList.remove('is-changing');
            void drawRoller.offsetWidth;
            drawRoller.classList.add('is-changing');
            step += 1;

            if (step < steps) {
                const delay = reduceMotion ? 80 : Math.round(55 + (step / steps) * 115);
                window.setTimeout(shuffle, delay);
                return;
            }

            drawRoller.textContent = pickedTitle;
            window.setTimeout(() => {
                const resultCard = pickedCard.cloneNode(true);
                resultCard.hidden = false;
                resultCard.querySelector('.food-select')?.remove();
                resultCard.classList.add('draw-winner');
                drawResult.replaceChildren(resultCard);

                drawStage.classList.remove('is-drawing');
                drawStage.classList.add('is-revealing');
                drawStatus.textContent = '抽選結果出爐！祝你用餐愉快。';
                drawButton.disabled = false;
                clearButton.disabled = false;

                if (!reduceMotion) {
                    drawStage.querySelectorAll('.draw-confetti').forEach(confetti => confetti.remove());
                    const colors = ['#DDEAF5', '#BFD7EA', '#91AEC1', '#FFFFFF', '#FFD166'];
                    for (let i = 0; i < 28; i += 1) {
                        const confetti = document.createElement('span');
                        confetti.className = 'draw-confetti';
                        confetti.style.setProperty('--confetti-x', `${-50 + Math.random() * 100}px`);
                        confetti.style.setProperty('--confetti-delay', `${Math.random() * 0.25}s`);
                        confetti.style.setProperty('--confetti-color', colors[i % colors.length]);
                        confetti.style.setProperty('--confetti-rotate', `${Math.random() * 360}deg`);
                        drawStage.append(confetti);
                    }
                }
            }, reduceMotion ? 100 : 260);
        };

        shuffle();
    });

    clearButton.addEventListener('click', () => {
        getCards().forEach(card => {
            const checkbox = card.querySelector('.food-select input');
            if (checkbox) checkbox.checked = false;
        });
        updateSelection();
    });
}

const CUSTOM_FOOD_STORAGE_KEY = 'osaka-trip-custom-foods';

function getCustomFoods() {
    try {
        const foods = JSON.parse(localStorage.getItem(CUSTOM_FOOD_STORAGE_KEY) || '[]');
        return Array.isArray(foods) ? foods : [];
    } catch {
        return [];
    }
}

function saveCustomFoods(foods) {
    localStorage.setItem(CUSTOM_FOOD_STORAGE_KEY, JSON.stringify(foods));
}

function isGoogleMapsUrl(url) {
    try {
        const host = new URL(url).hostname.toLowerCase();
        return host === 'maps.app.goo.gl' || host === 'goo.gl' ||
            host.includes('google.') || host.includes('google.co');
    } catch {
        return false;
    }
}

function cleanPlaceText(text) {
    return text
        .replace(/ - Google (Maps|マップ).*$/i, '')
        .replace(/,+/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
}

function parsePlaceUrl(url) {
    const parsed = new URL(url);
    let name = '';
    let location = '';
    const placeMatch = parsed.pathname.match(/\/place\/([^/]+)/);
    if (placeMatch) {
        name = cleanPlaceText(decodeURIComponent(placeMatch[1]).replace(/\+/g, ' ').replace(/_/g, ' '));
    }
    const query = parsed.searchParams.get('q') || parsed.searchParams.get('query');
    if (!name && query) {
        name = cleanPlaceText(decodeURIComponent(query).replace(/\+/g, ' '));
    }
    if (!name) {
        const searchMatch = parsed.pathname.match(/\/search\/([^/]+)/);
        if (searchMatch) {
            name = cleanPlaceText(decodeURIComponent(searchMatch[1]).replace(/\+/g, ' ').replace(/_/g, ' '));
        }
    }
    if (query && name && query.includes(name)) {
        location = cleanPlaceText(query.replace(name, '')).replace(/^[-・,\s]+/, '');
    }
    return {
        name,
        location,
        description: name ? 'Google Maps 推薦店家，可補充店家特色或推薦餐點。' : ''
    };
}

async function detectPlace(url) {
    let place = parsePlaceUrl(url);
    try {
        const response = await fetch(url, {
            redirect: 'follow',
            headers: { Accept: 'text/html' }
        });
        if (!response.ok) return place;
        const finalUrl = response.url;
        if (finalUrl && finalUrl !== url) {
            place = { ...place, ...parsePlaceUrl(finalUrl) };
        }
        const html = await response.text();
        const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
        if (titleMatch) {
            const title = cleanPlaceText(titleMatch[1].replace(/&amp;/g, '&'));
            if (title && title !== 'Google Maps') place.name = title;
        }
        const metaMatch = html.match(/<meta[^>]+(?:property|name)=["']og:description["'][^>]+content=["']([^"']+)/i);
        if (metaMatch) place.description = cleanPlaceText(metaMatch[1].replace(/&amp;/g, '&'));
    } catch {
        // URL parsing remains available when Google blocks browser requests.
    }
    return place;
}

function createCustomFoodCard(food) {
    const card = document.createElement('article');
    card.className = 'food-card custom-food-card';
    card.dataset.search = `自訂推薦 google maps ${food.location || ''} ${food.description || ''}`;

    const icon = document.createElement('div');
    icon.className = 'food-icon';
    icon.setAttribute('aria-hidden', 'true');
    icon.textContent = '📍';

    const content = document.createElement('div');
    content.className = 'food-card-content';
    const location = document.createElement('p');
    location.className = 'food-location';
    location.textContent = food.location || '自行新增';
    const title = document.createElement('h3');
    title.textContent = food.name;
    const description = document.createElement('p');
    description.textContent = food.description || '使用者新增的 Google Maps 推薦。';
    const mapLink = document.createElement('a');
    mapLink.className = 'food-map-link';
    mapLink.href = food.url;
    mapLink.target = '_blank';
    mapLink.rel = 'noopener noreferrer';
    mapLink.append(document.createTextNode('查看地圖 '));
    const arrow = document.createElement('span');
    arrow.setAttribute('aria-hidden', 'true');
    arrow.textContent = '↗';
    mapLink.append(arrow);
    content.append(location, title, description, mapLink);

    const removeButton = document.createElement('button');
    removeButton.type = 'button';
    removeButton.className = 'custom-food-remove';
    removeButton.textContent = '移除';
    removeButton.addEventListener('click', () => {
        saveCustomFoods(getCustomFoods().filter(item => item.url !== food.url));
        card.remove();
        window.refreshFoodSelections?.();
    });

    card.append(icon, content, removeButton);
    return card;
}

function setupCustomFoods() {
    const foodList = document.querySelector('#food-page .food-list');
    const form = document.getElementById('add-food-form');
    const linkInput = document.getElementById('add-food-link');
    const detectButton = document.getElementById('detect-food-link');
    const nameInput = document.getElementById('add-food-name');
    const locationInput = document.getElementById('add-food-location');
    const descriptionInput = document.getElementById('add-food-description');
    const status = document.getElementById('add-food-status');
    if (!foodList || !form || !linkInput || !detectButton ||
        !nameInput || !locationInput || !descriptionInput || !status) return;

    getCustomFoods().forEach(food => foodList.append(createCustomFoodCard(food)));

    detectButton.addEventListener('click', async () => {
        const url = linkInput.value.trim();
        if (!isGoogleMapsUrl(url)) {
            status.textContent = '請貼上 Google Maps 或 maps.app.goo.gl 的連結。';
            linkInput.focus();
            return;
        }
        detectButton.disabled = true;
        status.textContent = '正在辨識店名與地點……';
        const place = await detectPlace(url);
        if (place.name) nameInput.value = place.name;
        if (place.location) locationInput.value = place.location;
        if (place.description) descriptionInput.value = place.description;
        status.textContent = place.name
            ? '已自動帶入可編輯資料，確認無誤後再新增。'
            : '無法完整辨識，請手動填寫店名、地點與介紹。';
        detectButton.disabled = false;
    });

    form.addEventListener('submit', event => {
        event.preventDefault();
        const url = linkInput.value.trim();
        if (!isGoogleMapsUrl(url)) {
            status.textContent = '請貼上 Google Maps 或 maps.app.goo.gl 的連結。';
            return;
        }
        const name = nameInput.value.trim();
        if (!name) {
            status.textContent = '請填寫店名，或先按「辨識店家」。';
            nameInput.focus();
            return;
        }
        const foods = getCustomFoods();
        if (foods.some(food => food.url === url)) {
            status.textContent = '這個地點已經新增過了。';
            return;
        }
        const food = {
            name,
            location: locationInput.value.trim(),
            description: descriptionInput.value.trim(),
            url
        };
        foods.push(food);
        saveCustomFoods(foods);
        foodList.append(createCustomFoodCard(food));
        window.refreshFoodSelections?.();
        linkInput.value = '';
        nameInput.value = '';
        locationInput.value = '';
        descriptionInput.value = '';
        status.textContent = `已新增「${name}」，也可以加入抽選。`;
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderItinerary();
    setupPageNavigation();
    setupFoodSearch();
    setupCustomFoods();
    setupFoodPicker();
});

const installButton = document.getElementById('install-app');
let installPrompt = null;

window.addEventListener('beforeinstallprompt', event => {
    event.preventDefault();
    installPrompt = event;
});

window.addEventListener('appinstalled', () => {
    installPrompt = null;
    if (installButton) installButton.hidden = true;
});

installButton?.addEventListener('click', async () => {
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
    window.addEventListener('load', async () => {
        try {
            const registration = await navigator.serviceWorker.register('./service-worker.js');
            registration.update();

            registration.addEventListener('updatefound', () => {
                const newWorker = registration.installing;
                if (!newWorker) return;

                newWorker.addEventListener('statechange', () => {
                    if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                        const banner = document.getElementById('pwa-update-banner');
                        if (banner) banner.hidden = false;
                    }
                });
            });

            navigator.serviceWorker.ready.then(() => {
                if (registration.waiting) {
                    const banner = document.getElementById('pwa-update-banner');
                    if (banner) banner.hidden = false;
                }
            });

            const updateButton = document.getElementById('pwa-update-button');
            updateButton?.addEventListener('click', () => {
                const waitingWorker = registration.waiting;
                if (waitingWorker) {
                    waitingWorker.postMessage({ type: 'SKIP_WAITING' });
                } else {
                    window.location.reload();
                }
            });

            let refreshing = false;
            navigator.serviceWorker.addEventListener('controllerchange', () => {
                if (refreshing) return;
                refreshing = true;
                window.location.reload();
            });
        } catch (error) {
            console.error('離線支援註冊失敗：', error);
        }
    });
}