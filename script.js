!function() {

  var today = moment();

  function Calendar(selector, events) {
    this.el = document.querySelector(selector);
    this.events = events;
    this.current = moment().date(1);
    this.draw();
    var current = document.querySelector('.today');
    if(current) {
      var self = this;
      window.setTimeout(function() {
        self.openDay(current);
      }, 500);
    }
  }

  Calendar.prototype.draw = function() {
    // draw Header
    this.drawHeader();

    // draw Month
    this.drawMonth();

	// deactivated: draw legend
    //this.drawLegend();
  }

  Calendar.prototype.drawHeader = function() {
    var self = this;
    
	// check month and year
	
	var curMonth = self.current.clone().month();
	var nowMonth = moment().month();
	var curYear = self.current.clone().year();
	var nowYear = moment().year();
	
	var canGoBack = Boolean(true);
	if (curYear < nowYear)
		canGoBack = Boolean(false);
	if (curYear == nowYear && curMonth <= nowMonth)
		canGoBack = Boolean(false);
	
	if(!this.header)
	{	
      //Create the header elements
      this.header = createElement('div', 'header');
      this.header.className = 'header';

      this.title = createElement('h1');

      var right = createElement('div', 'right');
      right.addEventListener('click', function() { self.nextMonth(); });

      var left = createElement('div', 'left');
      left.addEventListener('click', function() { self.prevMonth(); });

      //Append the Elements
      this.header.appendChild(this.title); 
      this.header.appendChild(right);
	  this.header.appendChild(left);
      this.el.appendChild(this.header);
    }

	// write month and year
    this.title.innerHTML = "Salsa - " + this.current.format(' MMMM YYYY');
  }

  Calendar.prototype.drawMonth = function() {
    var self = this;
    
	// reset events
	this.events = [];
	
	// addresses
  
	var adrLoco = 'http://maps.google.fr/maps?f=q&source=s_q&hl=fr&geocode=&q=Loco+Mosquito,+Grenoble&sll=45.171914,5.689056&sspn=0.019696,0.054073&gl=fr&ie=UTF8&hq=Loco+Mosquito,&hnear=Grenoble,+Is%C3%A8re,+Rh%C3%B4ne-Alpes&z=14'

    var adrThea = 'http://maps.google.fr/maps?f=q&source=s_q&hl=fr&geocode=&q=theatro,+Grenoble&sll=45.18411,5.719001&sspn=0.039383,0.108147&gl=fr&ie=UTF8&hq=theatro,&hnear=Grenoble,+Is%C3%A8re,+Rh%C3%B4ne-Alpes&z=15'

    var adrTexM = 'http://maps.google.fr/maps?q=tex+mex+grenoble&hl=fr&ie=UTF8&ll=45.194347,5.718942&spn=0.015363,0.030127&sll=46.75984,1.738281&sspn=8.009512,15.424805&vpsrc=0&hq=tex+mex&hnear=Grenoble,+Is%C3%A8re,+Rh%C3%B4ne-Alpes&t=m&z=15'

    var adrAmbi = 'http://maps.google.fr/maps?f=q&source=s_q&hl=fr&geocode=&q=ambiance+caf%C3%A9,+Grenoble&sll=45.185714,5.730098&sspn=0.019691,0.054073&gl=fr&ie=UTF8&hq=ambiance+caf%C3%A9,&hnear=Grenoble,+Is%C3%A8re,+Rh%C3%B4ne-Alpes&z=13'

    var adrPopa = 'http://maps.google.fr/maps?f=q&source=s_q&hl=fr&geocode=&q=105+rue+des+alli%C3%A9s++grenoble&sll=45.173355,5.722289&sspn=0.020512,0.054073&ie=UTF8&hq=&hnear=105+Rue+des+Alli%C3%A9s,+38100+Grenoble,+Is%C3%A8re,+Rh%C3%B4ne-Alpes&z=16'

    var adrShag = 'http://maps.google.fr/maps?f=q&source=s_q&hl=fr&geocode=&q=shag+caf%C3%A9+Seyssinet+Pariset&sll=45.292279,5.888672&sspn=1.257838,3.460693&gl=fr&ie=UTF8&hq=shag+caf%C3%A9&hnear=Seyssinet-Pariset,+Is%C3%A8re,+Rh%C3%B4ne-Alpes&z=15'

    var adrSeez = 'http://maps.google.fr/maps?f=q&source=s_q&hl=fr&geocode=&q=50+route+de+Lyon,+Grenoble&sll=45.253622,5.718384&sspn=1.258695,3.460693&gl=fr&ie=UTF8&hq=&hnear=50+Route+de+Lyon,+38000+Grenoble,+Is%C3%A8re,+Rh%C3%B4ne-Alpes&ll=45.19604,5.71892&spn=0.010222,0.027037&z=16'

    var adrDavc = 'http://maps.google.com/maps?f=q&source=s_q&hl=en&geocode=&q=saint+martin+d%27heres+28+rue+barnave&aq=&sll=45.155896,5.712891&sspn=0.649803,1.730347&ie=UTF8&hq=&hnear=28+Rue+Barnave,+38400+Saint-Martin-d%27H%C3%A8res,+Is%C3%A8re,+Rh%C3%B4ne-Alpes,+France&t=h&z=16'

    var adrTago = 'http://maps.google.fr/maps?f=q&source=s_q&hl=fr&geocode=&q=Tago+Mago,+Grenoble&sll=45.19604,5.71892&sspn=0.010222,0.027037&gl=fr&g=50+route+de+Lyon,+Grenoble&ie=UTF8&hq=Tago+Mago,&hnear=Grenoble,+Is%C3%A8re,+Rh%C3%B4ne-Alpes&ll=45.186483,5.718684&spn=0.019691,0.054073&z=15'

    var adrNona = 'http://maps.google.fr/maps?f=q&source=s_q&hl=fr&geocode=&q=no+name,+Grenoble&sll=45.186483,5.718684&sspn=0.019691,0.054073&gl=fr&ie=UTF8&hq=no+name,&hnear=Grenoble,+Is%C3%A8re,+Rh%C3%B4ne-Alpes&ll=45.194044,5.749626&spn=0.019688,0.054073&z=15'

    var adrCali = 'http://maps.google.fr/maps?f=q&source=s_q&hl=fr&geocode=&q=45+rue+Nicolas+Chorier,+Grenoble&sll=45.251688,5.355835&sspn=1.258737,3.460693&gl=fr&ie=UTF8&hq=&hnear=45+Rue+Nicolas+Chorier,+38000+Grenoble,+Is%C3%A8re,+Rh%C3%B4ne-Alpes&z=16'

    var adrSunv = 'http://maps.google.com/maps?f=q&source=s_q&hl=en&geocode=&q=grenoble+sun+valley&aq=&sll=37.0625,-95.677068&sspn=46.409192,110.742188&ie=UTF8&hq=sun+valley&hnear=Grenoble,+Is%C3%A8re,+Rh%C3%B4ne-Alpes,+France&t=h&z=16'

    var adrMamb = 'http://maps.google.fr/maps?f=q&source=s_q&hl=fr&geocode=&q=mambo+rock,+Grenoble&sll=46.75984,1.738281&sspn=10.178118,27.685547&ie=UTF8&hq=mambo+rock,&hnear=Grenoble,+Is%C3%A8re,+Rh%C3%B4ne-Alpes&z=14'

    var adrPeca = 'http://maps.google.fr/maps?f=q&source=s_q&hl=fr&geocode=&q=160+rue+de+la+R%C3%A9publique,+Vizille&sll=46.573967,1.73584&sspn=10.212064,27.685547&ie=UTF8&hq=&hnear=160+Rue+de+la+R%C3%A9publique,+38220+Vizille,+Is%C3%A8re,+Rh%C3%B4ne-Alpes&ll=45.077066,5.77177&spn=0.020486,0.054073&z=15'

    var adrCuri = 'http://maps.google.fr/maps?f=q&source=s_q&hl=fr&geocode=&q=casino+d%27uriage&sll=46.75984,1.738281&sspn=10.328731,27.685547&ie=UTF8&hq=casino+d%27uriage&hnear=&z=13'
	  
	var adrPMC2  = 'http://maps.google.fr/maps?q=Parvis+de+la+MC2,+Avenue+Marcelin+Berthelot,+Grenoble&hl=fr&sll=46.75984,1.738281&sspn=6.246902,15.952148&t=h&z=14'
	  
	var adrUppe  = 'https://www.google.com/maps/place/UPPER+PLACE/@45.1858658,5.7286903,17z/data=!3m1!4b1!4m5!3m4!1s0x478af48d23691479:0xaddcede2fac0decb!8m2!3d45.185862!4d5.730879?hl=fr'

    var adrSaGr  = 'https://www.google.com/maps/place/Centre+de+Danse+Salsa+Grenoble/@45.1862133,5.7031764,17z/data=!3m1!4b1!4m5!3m4!1s0x478af37ca4da4def:0x5efd9931cd2656b!8m2!3d45.1862095!4d5.7053651?hl=fr'

	var adrAfte = "https://www.google.fr/maps/place/L'After/@45.2031457,5.7669453,15z/data=!4m2!3m1!1s0x0:0x78e53140e3a09892?ved=2ahUKEwj2rNup2O3eAhUBC8AKHYDWCDgQ_BIwCnoECAUQCA"
	
	var adrBowl = "https://www.google.fr/maps/place/BowlCenter+%C3%89chirolles/@45.1507527,5.7147063,17z/data=!3m1!4b1!4m5!3m4!1s0x478a8b4e8abd5aa1:0x5565c01cfe4f18f5!8m2!3d45.1507527!4d5.716895"
	
	var adrLabe = "https://www.google.fr/maps/place/La+Belle+Electrique/@45.1872341,5.7041817,15z/data=!4m2!3m1!1s0x0:0x16952b4feb50ba3b?ved=2ahUKEwjA6aCdldnfAhVrxoUKHa8nCAUQ_BIwDnoECAIQCA"
	
	// fill events given current month
	var nbDaysInMonth = this.current.clone().add('months', 1).subtract('days', 1).date();	
	for(var i = 1; i <= nbDaysInMonth ; i++)
	{
		var curMonth = self.current.clone().month();
		var curDate = moment([self.current.clone().year(), curMonth, i]);
		//alert(curDate);
		
		// Monday
		if (curDate.day() == 1)
		{
			var ev = { eventName: 'L\'After', styles: 'Salsa/Bachata/Kizomba', info: '18h', address: adrAfte, color: 'violet' };
			ev.date = curDate;
			this.events.push(ev);
		}
		
		// Tuesday
		if (curDate.day() == 2)
		{
			var ev = { eventName: 'Bowling Echirolles', styles: 'Salsa', info: 'Initiation à 20h30', address: adrBowl, color: 'pink' };
			ev.date = curDate;
			this.events.push(ev);
			
			var ev = { eventName: 'Da Vinci Club', styles: 'Bachata/Kizomba', info: '21h', address: adrDavc, color: 'blue' };
			ev.date = curDate;
			this.events.push(ev);
		}
		
		// Wednesday
		if (curDate.day() == 3)
		{
			// Shag Café: 3th Wednesday or July or August
			if ((i > 2*7 && i < 3*7+1) || curMonth == 6 || curMonth == 7 )
			{
				var ev = { eventName: 'Shag Café', styles: 'Salsa/Bachata/Merengue', info: 'Initiation à 20h', address: adrShag, color: 'orange' };
				ev.date = curDate;
				this.events.push(ev);
			}
		}
		
		// Thursday
		if (curDate.day() == 4)
		{
			var ev = { eventName: 'Da Vinci Club', styles: 'Salsa/Bachata/Merengue', info: '21h', address: adrDavc, color: 'blue' };
			ev.date = curDate;
			this.events.push(ev);
		}
		  
		// Friday
		if (curDate.day() == 5)
		{
			// Upper Place
			if ((curMonth == 09 && i == 12)
			 || (curMonth == 10 && (i == 02 || i == 23))	
			 || (curMonth == 01 && i == 01)
			 || (curMonth == 02 && (i == 01 || i == 29))
			 || (curMonth == 03 && i == 26)	
			)
			{
				var ev = { eventName: 'Upper Place', styles: 'Salsa/Bachata/Merengue', info: '21h30', address: adrUppe, color: 'red' };
				ev.date = curDate;
				this.events.push(ev);
			}
			
			// No Name
			var ev = { eventName: 'No Name', styles: 'Kizomba/Bachata/Salsa', info: '21h', address: adrNona, color: 'yellow' };
			ev.date = curDate;
			this.events.push(ev);
			
			// La Belle Electrique
			if ((curMonth == 00 && i == 11)
			)
			{
				var ev = { eventName: 'La Belle Electrique', styles: 'Salsa/Bachata/Merengue', info: '21h', address: adrLabe, color: 'white' };
				ev.date = curDate;
				this.events.push(ev);
			}
		}
		
		// Saturday
		if (curDate.day() == 6)
		{
			// Salsa Grenoble
			if ((curMonth == 9  && (i == 13 || i == 27))
			 || (curMonth == 10 && (i == 10 || i == 24))
			 || (curMonth == 11 && (i == 08 || i == 22))
			 || (curMonth == 00 && (i == 05 || i == 19))
			 || (curMonth == 01 && (i == 02 || i == 16))
			 || (curMonth == 02 && (i == 02 || i == 16 || i == 30))
			)
			{
				var ev = { eventName: 'Salsa Grenoble', info: 'Initiation à 21h', styles: 'Salsa/Bachata/Merengue', address: adrSaGr, color: 'green' };
				ev.date = curDate;
				this.events.push(ev);
			}
			
			// Da Vinci Club
			if ((curMonth == 00 && i == 12)
			)
			{
				var ev = { eventName: 'Da Vinci Club', styles: 'Salsa/Bachata/Kizomba', info: '20h', address: adrDavc, color: 'blue' };
				ev.date = curDate;
				this.events.push(ev);
			}
		}
		
		// Sunday
		if (curDate.day() == 0)
		{
			
		}
    }
	
	// set events to random dates
    //this.events.forEach(function(event) {
	//	event.date = self.current.clone().date(Math.random() * (29 - 1) + 1);
    //});
	
	
    if(this.month) {
      this.oldMonth = this.month;
      this.oldMonth.className = 'month out ' + (self.next ? 'next' : 'prev');
      this.oldMonth.addEventListener('webkitAnimationEnd', function() {
        self.oldMonth.parentNode.removeChild(self.oldMonth);
        self.month = createElement('div', 'month');
        self.fillDaysBeforeMonth();
        self.fillDaysCurrentMonth();
        self.fillDaysAfterMonth();
        self.el.appendChild(self.month);
        window.setTimeout(function() {
          self.month.className = 'month in ' + (self.next ? 'next' : 'prev');
        }, 16);
      });
    } else {
        this.month = createElement('div', 'month');
        this.el.appendChild(this.month);
        this.fillDaysBeforeMonth();
        this.fillDaysCurrentMonth();
        this.fillDaysAfterMonth();
        this.month.className = 'month new';
    }
  }

  // draw days before current month
  Calendar.prototype.fillDaysBeforeMonth = function() {
    var clone = this.current.clone();
    var dayOfWeek = clone.day();
	
	// French localization: set Monday as first day (index 0)
	dayOfWeek = (dayOfWeek - 1 + 7) % 7;
	
    if(!dayOfWeek) { return; }
    clone.subtract('days', dayOfWeek+1);

    for(var i = dayOfWeek; i > 0 ; i--)
	{
      this.drawDay(clone.add('days', 1));
    }
  }

  // draw days after current month
  Calendar.prototype.fillDaysAfterMonth = function() {
    var clone = this.current.clone().add('months', 1).subtract('days', 1);
    var dayOfWeek = clone.day();
	
	// French localization: set Monday as first day (index 0)
	dayOfWeek = (dayOfWeek - 1 + 7) % 7;

	// last day, nop
    if(dayOfWeek === 6) { return; }

    for(var i = dayOfWeek; i < 6 ; i++) {
      this.drawDay(clone.add('days', 1));
    }
  }

  // draw current month days
  Calendar.prototype.fillDaysCurrentMonth = function() {
    var clone = this.current.clone();

    while(clone.month() === this.current.month()) {
      this.drawDay(clone);
      clone.add('days', 1);
    }
  }

  Calendar.prototype.getWeek = function(day) {
    // French localization: set Monday as first day (index 0)
    if(!this.week || day.day() === 1) {
      this.week = createElement('div', 'week');
      this.month.appendChild(this.week);
    }
  }

  Calendar.prototype.drawDay = function(day) {
    var self = this;
    this.getWeek(day);

    //Outer Day
	var dayClass = this.getDayClass(day);
    var outer = createElement('div', dayClass);
    outer.addEventListener('click', function() {
      self.openDay(this);
    });

    //Day Name
	var dayName = day.format('ddd');
	var dayNameFr = dayName;
	switch (dayName.toLowerCase())
	{
		case "sun":
			dayNameFr = "dim";
			break;
		case "mon":
			dayNameFr = "lun";
			break;
		case "tue":
			dayNameFr = "mar";
			break;
		case "wed":
			dayNameFr = "mer";
			break;
		case "thu":
			dayNameFr = "jeu";
			break;
		case "fri":
			dayNameFr = "ven";
			break;
		case "sat":
			dayNameFr = "sam";
			break;
	}
	
	// day name
	if (dayClass == "day other")
		var name = createElement('div', 'day-name-other', dayNameFr);
	else
		var name = createElement('div', 'day-name', dayNameFr);

    //Day Number
    var number = createElement('div', 'day-number', day.format('DD'));

    //Events
    var events = createElement('div', 'day-events');
    this.drawEvents(day, events);

    outer.appendChild(name);
    outer.appendChild(number);
    outer.appendChild(events);
    this.week.appendChild(outer);
  }

  Calendar.prototype.drawEvents = function(day, element) {
    if(day.month() === this.current.month()) {
      var todaysEvents = this.events.reduce(function(memo, ev) {
        if(ev.date.isSame(day, 'day')) {
          memo.push(ev);
        }
        return memo;
      }, []);

      todaysEvents.forEach(function(ev) {
        var evSpan = createElement('span', ev.color);
        element.appendChild(evSpan);
      });
    }
  }

  Calendar.prototype.getDayClass = function(day) {
    classes = ['day'];
    if(day.month() !== this.current.month()) {
      classes.push('other');
    } else if (today.isSame(day, 'day')) {
      classes.push('today');
    }
    return classes.join(' ');
  }

  Calendar.prototype.openDay = function(el) {
    var details, arrow;
    var dayNumber = +el.querySelectorAll('.day-number')[0].innerText || +el.querySelectorAll('.day-number')[0].textContent;
    var day = this.current.clone().date(dayNumber);

    var currentOpened = document.querySelector('.details');

    //Check to see if there is an open details box on the current row
    if(currentOpened && currentOpened.parentNode === el.parentNode) {
      details = currentOpened;
      arrow = document.querySelector('.arrow');
    } else {
      //Close the open events on different week row
      //currentOpened && currentOpened.parentNode.removeChild(currentOpened);
      if(currentOpened) {
        currentOpened.addEventListener('webkitAnimationEnd', function() {
          currentOpened.parentNode.removeChild(currentOpened);
        });
        currentOpened.addEventListener('oanimationend', function() {
          currentOpened.parentNode.removeChild(currentOpened);
        });
        currentOpened.addEventListener('msAnimationEnd', function() {
          currentOpened.parentNode.removeChild(currentOpened);
        });
        currentOpened.addEventListener('animationend', function() {
          currentOpened.parentNode.removeChild(currentOpened);
        });
        currentOpened.className = 'details out';
      }

      //Create the Details Container
      details = createElement('div', 'details in');

      //Create the arrow
      var arrow = createElement('div', 'arrow');

      //Create the event wrapper

      details.appendChild(arrow);
      el.parentNode.appendChild(details);
    }

    var todaysEvents = this.events.reduce(function(memo, ev) {
      if(ev.date.isSame(day, 'day')) {
        memo.push(ev);
      }
      return memo;
    }, []);

    this.renderEvents(todaysEvents, details);

    arrow.style.left = el.offsetLeft - el.parentNode.offsetLeft + 27 + 'px';
  }

  // draw events
  Calendar.prototype.renderEvents = function(events, ele) {
    //Remove any events in the current details element
    var currentWrapper = ele.querySelector('.events');
    var wrapper = createElement('div', 'events in' + (currentWrapper ? ' new' : ''));

	// generic
	var space = document.createTextNode(" ");
	var spaces10 = document.createTextNode(" ");
	var tab = document.createTextNode("\t\t");
	var newline = createElement('br');
	
	// draw event
    events.forEach(function(ev) {
      var div = createElement('div', 'event');
      var square = createElement('div', 'event-category ' + ev.color);
      var name = createElement('span', '', ev.eventName);
	  var styles = createElement('i', '', ' (' + ev.info + ', ' + ev.styles + ')');
	  styles.style.fontSize = "14px";
	  
	  // map button
	  var map = createElement('a');
      var textNode = document.createTextNode("Plan");
      map.setAttribute('href', ev.address);
      map.appendChild(textNode);

      div.appendChild(square);
      div.appendChild(name);
	  div.appendChild(space);
	  div.appendChild(styles);
	  div.appendChild(space);
	  div.appendChild(map);
      wrapper.appendChild(div);
    });

	// no events
    if(!events.length) {
      var div = createElement('div', 'event empty');
      var span = createElement('span', '', 'Pas de soirées');

      div.appendChild(span);
      wrapper.appendChild(div);
    }

    if(currentWrapper) {
      currentWrapper.className = 'events out';
      currentWrapper.addEventListener('webkitAnimationEnd', function() {
        currentWrapper.parentNode.removeChild(currentWrapper);
        ele.appendChild(wrapper);
      });
      currentWrapper.addEventListener('oanimationend', function() {
        currentWrapper.parentNode.removeChild(currentWrapper);
        ele.appendChild(wrapper);
      });
      currentWrapper.addEventListener('msAnimationEnd', function() {
        currentWrapper.parentNode.removeChild(currentWrapper);
        ele.appendChild(wrapper);
      });
      currentWrapper.addEventListener('animationend', function() {
        currentWrapper.parentNode.removeChild(currentWrapper);
        ele.appendChild(wrapper);
      });
    } else {
      ele.appendChild(wrapper);
    }
  }

  Calendar.prototype.drawLegend = function() {
    var legend = createElement('div', 'legend');
    var calendars = this.events.map(function(e) {
      return e.calendar + '|' + e.color;
    }).reduce(function(memo, e) {
      if(memo.indexOf(e) === -1) {
        memo.push(e);
      }
      return memo;
    }, []).forEach(function(e) {
      var parts = e.split('|');
      var entry = createElement('span', 'entry ' +  parts[1], parts[0]);
      legend.appendChild(entry);
    });
    this.el.appendChild(legend);
  }

  Calendar.prototype.nextMonth = function() {
    this.current.add('months', 1);
    this.next = true;
    this.draw();
  }

  Calendar.prototype.prevMonth = function() {
    this.current.subtract('months', 1);
    this.next = false;
    this.draw();
  }

  window.Calendar = Calendar;

  function createElement(tagName, className, innerText) {
    var ele = document.createElement(tagName);
    if(className) {
      ele.className = className;
    }
    if(innerText) {
      ele.innderText = ele.textContent = innerText;
    }
    return ele;
  }
}();

!function() {
  var events = [
  ];

  function addDate(event) {
    
  }

  var calendar = new Calendar('#calendar', events);
  
}();
