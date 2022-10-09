const time = document.getElementById('time');
const time_sec = document.getElementById('second');
function clock() {
	const t = new Date();
	let flag = 'AM';
	let h = t.getHours();
	let m = t.getMinutes();
	let s = t.getSeconds();
	if (h > 11) {
		flag = 'PM';
	} else {
		flag = 'AM';
	}
	h = h > 12 ? h - 12 : h;
	h = h >= 10 ? h : '0' + h;
	m = m >= 10 ? m : '0' + m;
	s = s >= 10 ? s : '0' + s;
	h = h.toString();
	m = m.toString();
	s = s.toString();
	h = h.replace(/1/g, '&nbsp;1');
	m = m.replace(/1/g, '&nbsp;1');
	s = s.replace(/1/g, '&nbsp;1');
	time.innerHTML = `
	    <div>${h}</div>
	    <div>:</div>
	    <div>${m}</div>
	    <sub id="second">${s} ${flag}</sub>`;
}
setInterval(clock, 1000);
clock();
