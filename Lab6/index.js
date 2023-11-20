const DURATION = 80;

const lessons = [
  {
    title: "Проектування та розробка веб-застосувань",
    start: "09:00",
    lector_lastname: "Гамоцька",
  },
  {
    title: "Системний аналіз",
    start: "10:30",
    lector_lastname: "",
  },
  {
    title: "Філософія",
    start: "12:10",
    lector_lastname: "Савинська",
  },
];

const getCurrentTime = () => formatTime(new Date());
const formatTime = (time) => new Date(time).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
const getTimestamp = (time) => new Date(`01/01/2000 ${time}`).getTime();
const getEndTimestamp = (time) => time + DURATION * 60 * 1000;

const isLessonActive = (lesson) => {
  const startTime = getTimestamp(lesson.start);
  const endTime = getEndTimestamp(startTime);
  const currentTime = getTimestamp(getCurrentTime());

  return currentTime >= startTime && currentTime <= endTime;
};

const getCurrentLesson = (lessons) => {
  for (let i = 0; i < lessons.length; i++) {
    if (isLessonActive(lessons[i])) {
      return lessons[i];
    }
  }

  return null;
};

const getLessonTimeBreak = (lessons) => {
  for (let i = 0; i < lessons.length - 1; i++) {
    const currentLessonEndTime = getEndTimestamp(
      getTimestamp(lessons[i].start)
    );
    const nextLessonStartTime = getTimestamp(lessons[i + 1].start);
    const currentTime = getTimestamp(getCurrentTime());
    if (
      currentLessonEndTime < currentTime &&
      currentTime < nextLessonStartTime
    ) {
      return i + 1;
    }
  }
  return null;
};

const areLessonsBegun = (lesson) => {
  const currentTime = getTimestamp(getCurrentTime());
  return currentTime > getTimestamp(lesson.start);
};

const showLessonsInfo = (lessons) => {
  const infoP = document.querySelector("#info");

  if (!areLessonsBegun(lessons[0])) {
    infoP.innerHTML = "Пари ще не почались";
    return;
  }

  const currentLesson = getCurrentLesson(lessons);

  if (currentLesson) {
    infoP.innerHTML = `Зараз йде пара з ${currentLesson.title} з ${
      currentLesson.start
    } до ${formatTime(getEndTimestamp(getTimestamp(currentLesson.start)))}. ${
      currentLesson.lector_lastname
        ? "Прізвище викладача: " + currentLesson.lector_lastname
        : "Інформація про викладача відсутня"
    }`;
    return;
  }

  const lessonsBreak = getLessonTimeBreak(lessons);
  if(lessonsBreak){
    infoP.innerHTML = `перерва після ${lessonsBreak} пари`;
    return;
  }

  infoP.innerHTML = "Пари закінчилися.";
};

const button = document.querySelector("#btn");
button.addEventListener("click", () => showLessonsInfo(lessons));
