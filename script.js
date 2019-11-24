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

  Calendar.prototype.drawHeader = function()
  {
    var self = this;
    
    // check month and year
    
    var curMonth = self.current.clone().month();
    var nowMonth = moment().month();
    var curYear = self.current.clone().year();
    var nowYear = moment().year();
    
    // create header at first launch
    if(!this.header)
    {	
      this.header = createElement('div', 'header');
      this.header.className = 'header';

      this.title = createElement('h1');

      var right = createElement('div', 'right');
      right.addEventListener('click', function() { self.nextMonth(); });

      var left = createElement('div', 'left');
      left.addEventListener('click', function() { self.prevMonth(); });

      // append elements
      this.header.appendChild(this.title); 
      this.header.appendChild(right);
	    this.header.appendChild(left);
      this.el.appendChild(this.header);
    }

    // disable left arrow if current month

    var canGoBack = Boolean(true);
    if (curYear < nowYear)
      canGoBack = Boolean(false);
    if (curYear == nowYear && curMonth <= nowMonth)
      canGoBack = Boolean(false);
    //alert("canGoBack = " + canGoBack);

    var children = this.header.children;
    for (let i = 0; i < children.length; i++)
    {
      var child = children[i];
      if (child.className != 'left')
        continue;

      if (canGoBack)
        child.style.display = "block";
      else
        child.style.display = "none";
    }

	  // write month and year
    this.title.innerHTML = "Salsa - " + this.current.format(' MMMM YYYY');
  }

  Calendar.prototype.drawMonth = function()
  {
    var self = this;
    
    // reset events
    this.events = [];
    
    // fill events given current month
    var nbDaysInMonth = this.current.clone().add('months', 1).subtract('days', 1).date();	
    for(var day = 1; day <= nbDaysInMonth ; day++)
    {
		var curMonth = self.current.clone().month() + 1;
		var curDate = moment([self.current.clone().year(), curMonth-1, day]);
		//alert(curDate);

		switch (curDate.day())
		{
			// Monday
			case 1:
				//
				break;
		
		
			// Tuesday
			case 2:
				this.addEvent(curDate, "da_vinci", '21h', 'Bachata/Kizomba' );
				//this.addEvent(curDate, "bowling", 'Initiation à 20h30', 'Salsa' );
				//this.addEvent(curDate, "loco", 'Initiation à 19h', 'Salsa/Bachata' );
				break;
			
			
			// Wednesday
			case 3:
			{
				// Shag Café: 3rd Wednesday or every Wednesday in July or August
				if ((day > 2*7 && day <= 3*7)
				  || curMonth == 7
				  || curMonth == 8
				)
				{
					this.addEvent(curDate, "shag", 'Initiation à 20h', 'Salsa/Bachata/Merengue' );
				}
				
				break;
			}
			
			
			// Thursday
			case 4:
			{
				// Da Vinci Club
				this.addEvent(curDate, "da_vinci", '21h', 'Salsa/Bachata/Merengue' );

				// Escapade Voiron
				if ((curMonth == 12 && day == 12)
				 || (curMonth == 12 && day == 19)
				)
				{
					this.addEvent(curDate, "escapade", '20h30', 'Salsa/Bachata/Kizomba' );
				}
				
				break;
			}
			
			
			// Friday
			case 5:
			{
				// After Grimaldi
				this.addEvent(curDate, "after", '21h', 'Salsa/Bachata/Kizomba' );
				  
				// Upper Place
				if ((curMonth == 11 && (day == 01))
				 || (curMonth == 12 && (day == 06))
				 || (curMonth == 01 && (day == 17))
				 || (curMonth == 02 && (day == 07))
				 || (curMonth == 03 && (day == 06))
				 || (curMonth == 04 && (day == 03))
				 || (curMonth == 05
				 && (day == 07))
				)
				{
					this.addEvent(curDate, "upper_place", '21h30', 'Salsa/Bachata/Merengue' );
				}
				
				// Salsa Grenoble
				if ((curMonth == 02 && (day == 01))
				 || (curMonth == 04 && (day == 05))
				)
				{
					this.addEvent(curDate, "salsa_gre", 'Initiation à 21h', 'Salsa/Bachata/Merengue' );
				}
					  
				// La Belle Electrique
				if ((curMonth == 01 && day == 11)
				)
				{
					this.addEvent(curDate, "la_belle", '21h', 'Salsa/Bachata/Merengue' );
				}
				
				break;
			}
			
			
			// Saturday
			case 6:
			{
				// Gianonne 
				if ((curMonth == 09 && day == 28))
				{
					this.addEvent(curDate, "gianonne", '20h30', 'Salsa/Bachatta' );
				} 
				
				// Da Vinci
				if ((curMonth == 12 && day == 07)
				)
				{
					this.addEvent(curDate, "da_vinci", '21h30', 'Salsa/Bachata/Merengue' );
				}
				
				// After Grimaldi
				if (curMonth == 11 && day == 30)
				{
					this.addEvent(curDate, "after", '19h30', 'Salsa/Bachata/Kizomba/Rock' );
				}
				
				// After Grimaldi
				if (curMonth == 12 && day == 07)
				{
					this.addEvent(curDate, "after", '20h30', 'Salsa/Bachata/Kizomba/Rock' );
				}
				
				// Salsa Grenoble
				if ((curMonth == 11 && (day == 09 || day == 23))
				 || (curMonth == 12 && (day == 07 || day == 21))
				 || (curMonth == 01 && (day == 04 || day == 18))
				 || (curMonth == 02 && (day == 01 || day == 15 || day == 29))
				 || (curMonth == 03 && (day == 14 || day == 28))
				 || (curMonth == 04 && (day == 11))
				 || (curMonth == 05 && (day == 09 || day == 23))
				 || (curMonth == 06 && (day == 06 || day == 20))
				)
				{
					this.addEvent(curDate, "salsa_gre", 'Initiation à 21h', 'Salsa/Bachata/Kizomba' );
				}
				
				// Garric Danse Voiron: 3rd Saturday
				if ((day > 2*7 && day <= 3*7)
				  && curMonth <= 5
				)
				{
				  this.addEvent(curDate, "garric", '21h30', 'Salsa/Bachata/Merengue' );
				}
				
				// Mambo Rock Chambéry Cocktail: 1st and 3rd Saturday
				if ((day > 0*7 && day <= 1*7)
				 || (day > 2*7 && day <= 3*7)
				)
				{
					this.addEvent(curDate, "mambo", '21h', 'Salsa/Bachata/Kizomba' );
				}
				
				// Mambo Rock Chambéry SBK: 2nd Saturday
				if (day > 1*7 && day <= 2*7)
				{
					this.addEvent(curDate, "mambo", '22h', 'Salsa/Bachata/Kizomba' );
				}
				
				// Mambo Rock Chambéry Tsunami
				if ((curMonth == 03 && day == 28)
				)
				{
					this.addEvent(curDate, "mambo", '22h', 'Salsa/Bachata/Kizomba' );
				}
				
				break;
			}
			
			
			// Sunday
			case 0:
				//
				break;
		}
    }
		
    if (this.month)
    {
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
    }
    else
    {
        this.month = createElement('div', 'month');
        this.el.appendChild(this.month);
        this.fillDaysBeforeMonth();
        this.fillDaysCurrentMonth();
        this.fillDaysAfterMonth();
        this.month.className = 'month new';
    }
  }

  Calendar.prototype.addEvent = function(date, locationKey, info, styles)
  {
    var location = locations.get(locationKey);

    var ev = { location: location, info: info, styles: styles };
    ev.date = date;
    this.events.push(ev);
  }

  // draw days before current month
  Calendar.prototype.fillDaysBeforeMonth = function()
  {
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
        var evSpan = createElement('span', ev.location.color);
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
      //var square = createElement('div', 'event-category ' + ev.color);
      //var name = createElement('span', '', ev.eventName);
	  var square = createElement('div', 'event-category ' + ev.location.color);
    var name = createElement('span', '', ev.location.name);
	  var styles = createElement('i', '', ' (' + ev.info + ', ' + ev.styles + ')');
	  styles.style.fontSize = "14px";
	  
	  // map button
	  var map = createElement('a');
      var textNode = document.createTextNode("Plan");
      //map.setAttribute('href', ev.address);
	  map.setAttribute('href', ev.location.address);
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

  function addDate(event) 
  {
    
  }

  var calendar = new Calendar('#calendar', events);
  
}();
