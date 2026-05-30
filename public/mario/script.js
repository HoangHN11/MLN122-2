const oldRooms = [
  {
    title: "Phòng 1: Khái niệm giai cấp",
    questions: [
      {
        text: "Theo chủ nghĩa duy vật lịch sử, giai cấp được hình thành chủ yếu dựa trên cơ sở nào?",
        answers: [
          "Vị trí khác nhau của các nhóm người trong hệ thống sản xuất xã hội",
          "Sở thích cá nhân và phong cách tiêu dùng của từng người",
          "Màu da, giới tính hoặc đặc điểm sinh học bẩm sinh",
          "Mức độ nổi tiếng trên mạng xã hội"
        ],
        correct: 0,
        explain: "Giai cấp gắn với vị trí trong sản xuất, đặc biệt là quan hệ với tư liệu sản xuất và phân phối sản phẩm."
      },
      {
        text: "Vì sao phân chia giai cấp trong xã hội có tư hữu về tư liệu sản xuất mang tính khách quan?",
        answers: [
          "Vì nó nảy sinh từ quan hệ kinh tế hiện thực, không phụ thuộc vào ý muốn riêng của cá nhân",
          "Vì mọi người tự nguyện chọn mình thuộc giai cấp nào",
          "Vì nhà nước chỉ cần ban hành luật là tạo ra giai cấp",
          "Vì công nghệ cao tự động xóa mọi bất bình đẳng"
        ],
        correct: 0,
        explain: "Khi tư liệu sản xuất thuộc về một bộ phận xã hội, sự khác biệt lợi ích kinh tế xuất hiện một cách khách quan."
      }
    ]
  },
  {
    title: "Phòng 2: Đấu tranh giai cấp",
    questions: [
      {
        text: "Đấu tranh giai cấp xuất hiện khi nào?",
        answers: [
          "Khi lợi ích cơ bản giữa các giai cấp đối lập không thể điều hòa trong một trật tự xã hội nhất định",
          "Khi mọi người có quan điểm giống nhau về phân phối của cải",
          "Khi xã hội không còn chế độ tư hữu",
          "Khi con người ngừng lao động sản xuất"
        ],
        correct: 0,
        explain: "Đấu tranh giai cấp bắt nguồn từ mâu thuẫn lợi ích giữa những giai cấp có vị trí kinh tế đối lập."
      },
      {
        text: "Trong xã hội số, đấu tranh giai cấp có thể chuyển hóa thành hình thức nào?",
        answers: [
          "Đấu tranh về quyền tiếp cận dữ liệu, nền tảng, kỹ năng số và lợi ích từ công nghệ",
          "Chỉ còn là cuộc thi xem ai dùng điện thoại đời mới hơn",
          "Biến mất hoàn toàn vì internet làm mọi người bình đẳng tuyệt đối",
          "Chỉ là xung đột giữa các hãng sản xuất trò chơi"
        ],
        correct: 0,
        explain: "Hình thức có thể thay đổi, nhưng mâu thuẫn về quyền kiểm soát nguồn lực và lợi ích kinh tế vẫn tồn tại."
      }
    ]
  },
  {
    title: "Phòng 3: Xã hội số và bất bình đẳng",
    questions: [
      {
        text: "Khái niệm 'bất bình đẳng số' trong activity của nhóm nói đến điều gì?",
        answers: [
          "Khoảng cách giữa người có khả năng truy cập, làm chủ công nghệ và người bị bỏ lại phía sau",
          "Sự khác nhau về màu sắc giao diện máy tính",
          "Việc người trẻ chơi game nhiều hơn người lớn tuổi",
          "Sự cạnh tranh giữa các nhân vật trong game Mario"
        ],
        correct: 0,
        explain: "Bất bình đẳng số phản ánh khoảng cách về hạ tầng, kỹ năng, dữ liệu và cơ hội hưởng lợi từ công nghệ."
      },
      {
        text: "Vì sao 'tư duy làm chủ tri thức' chưa đủ để phủ nhận sự tồn tại của giai cấp?",
        answers: [
          "Vì tri thức cũng chịu tác động bởi quyền sở hữu, điều kiện tiếp cận và cơ hội sử dụng công nghệ",
          "Vì tri thức chỉ có trong sách giấy",
          "Vì ai lên mạng cũng tự động có cùng cơ hội phát triển",
          "Vì giai cấp chỉ là khái niệm trong quá khứ, không liên quan kinh tế"
        ],
        correct: 0,
        explain: "Trong xã hội số, tri thức là nguồn lực quan trọng nhưng không được phân phối ngang bằng cho mọi người."
      }
    ]
  },
  {
    title: "Phòng 4: Tính lịch sử và tất yếu",
    questions: [
      {
        text: "Nói phân chia giai cấp có tính lịch sử nghĩa là gì?",
        answers: [
          "Giai cấp không tồn tại vĩnh viễn, mà xuất hiện và biến đổi theo những điều kiện lịch sử nhất định",
          "Giai cấp xuất hiện do một câu chuyện cổ tích",
          "Giai cấp là hiện tượng tự nhiên giống thời tiết",
          "Giai cấp chỉ tồn tại trong môn Lịch sử"
        ],
        correct: 0,
        explain: "Giai cấp ra đời khi sản xuất phát triển đến mức có của cải dư thừa và tư hữu về tư liệu sản xuất."
      },
      {
        text: "Trong các xã hội còn chế độ tư hữu về tư liệu sản xuất, vì sao phân chia giai cấp có tính tất yếu?",
        answers: [
          "Vì tư hữu tạo ra sự khác biệt về quyền chiếm hữu, tổ chức sản xuất và phân phối lợi ích",
          "Vì mọi người sinh ra đã cố định thuộc một giai cấp mãi mãi",
          "Vì chỉ cần có mạng xã hội là tự nhiên có giai cấp",
          "Vì nhà trường bắt buộc phải chia lớp học thành giai cấp"
        ],
        correct: 0,
        explain: "Chừng nào quyền sở hữu và kiểm soát tư liệu sản xuất còn không ngang nhau, phân hóa giai cấp còn có cơ sở tồn tại."
      }
    ]
  },
  {
    title: "Phòng 5: Giai cấp và dân tộc",
    questions: [
      {
        text: "Mối quan hệ giữa vấn đề giai cấp và vấn đề dân tộc nên được hiểu như thế nào?",
        answers: [
          "Hai vấn đề có liên hệ với nhau; lợi ích dân tộc cần được nhìn trong bối cảnh lợi ích giai cấp cụ thể",
          "Hai vấn đề hoàn toàn tách rời, không bao giờ tác động qua lại",
          "Dân tộc chỉ là tên gọi địa lý nên không liên quan xã hội",
          "Giai cấp luôn tự động biến mất khi nhắc đến dân tộc"
        ],
        correct: 0,
        explain: "Trong duy vật lịch sử, dân tộc và giai cấp đều gắn với điều kiện kinh tế - xã hội và lợi ích cụ thể."
      },
      {
        text: "Kết luận phù hợp nhất cho activity của nhóm là gì?",
        answers: [
          "Giai cấp vẫn tồn tại trong xã hội số, còn đấu tranh giai cấp chuyển hóa sang cả lĩnh vực dữ liệu, công nghệ và tri thức",
          "Công nghệ cao đã làm mọi mâu thuẫn giai cấp biến mất hoàn toàn",
          "Chỉ người không biết dùng máy tính mới thuộc giai cấp bị trị",
          "Bất bình đẳng số chỉ là vấn đề giải trí, không liên quan sản xuất"
        ],
        correct: 0,
        explain: "Xã hội số không xóa ngay cơ sở kinh tế của giai cấp; nó làm hình thức phân tầng và đấu tranh trở nên mới hơn."
      }
    ]
  }
];

const rooms = [
  {
    title: "Phòng 1: Giai cấp và tư liệu sản xuất",
    questions: [
      {
        text: "Tiêu chí quan trọng nhất để phân biệt giai cấp là:",
        answers: [
          "Mức thu nhập cá nhân",
          "Quan hệ với tư liệu sản xuất",
          "Trình độ học vấn",
          "Nguồn gốc gia đình"
        ],
        correct: 1,
        explain: "Tiêu chí quan trọng nhất là quan hệ của các nhóm người với tư liệu sản xuất."
      },
      {
        text: "Nguyên nhân cơ bản của đấu tranh giai cấp là:",
        answers: [
          "Khác biệt văn hóa",
          "Bất đồng ngôn ngữ",
          "Mâu thuẫn lợi ích kinh tế",
          "Chênh lệch tuổi tác"
        ],
        correct: 2,
        explain: "Đấu tranh giai cấp bắt nguồn từ mâu thuẫn lợi ích kinh tế giữa các giai cấp."
      }
    ]
  },
  {
    title: "Phòng 2: Giai cấp vô sản và đấu tranh giai cấp",
    questions: [
      {
        text: "Trong xã hội tư bản, giai cấp vô sản chủ yếu là:",
        answers: [
          "Người làm thuê để kiếm sống",
          "Người sở hữu doanh nghiệp",
          "Chủ đất nông nghiệp",
          "Quan chức nhà nước"
        ],
        correct: 0,
        explain: "Giai cấp vô sản chủ yếu là những người không sở hữu tư liệu sản xuất, phải làm thuê để sống."
      },
      {
        text: "Đấu tranh giai cấp thường xuất hiện khi:",
        answers: [
          "Dân số tăng nhanh",
          "Xã hội có đối lập lợi ích",
          "Công nghệ phát triển",
          "Nhà nước đổi chính sách"
        ],
        correct: 1,
        explain: "Đấu tranh giai cấp xuất hiện khi trong xã hội có các lợi ích đối lập không dễ điều hòa."
      }
    ]
  },
  {
    title: "Phòng 3: Dân tộc và sứ mệnh lịch sử",
    questions: [
      {
        text: "Đặc điểm nào thuộc về dân tộc?",
        answers: [
          "Chung một nghề nghiệp",
          "Cùng mức thu nhập",
          "Có chung đời sống kinh tế",
          "Cùng địa vị xã hội"
        ],
        correct: 2,
        explain: "Một đặc điểm cơ bản của dân tộc là có chung đời sống kinh tế."
      },
      {
        text: "Giai cấp vô sản có sứ mệnh lịch sử vì:",
        answers: [
          "Có nhiều tài sản xã hội",
          "Được nhà nước trao quyền",
          "Có số lượng đông nhất",
          "Đại diện lực lượng sản xuất tiên tiến"
        ],
        correct: 3,
        explain: "Giai cấp vô sản có sứ mệnh lịch sử vì đại diện cho lực lượng sản xuất tiên tiến."
      }
    ]
  },
  {
    title: "Phòng 4: Hình thức đấu tranh và bản chất giai cấp",
    questions: [
      {
        text: "Đấu tranh giai cấp diễn ra chủ yếu trên:",
        answers: [
          "Kinh tế, chính trị và tư tưởng",
          "Văn hóa, nghệ thuật và giáo dục",
          "Tôn giáo, gia đình và đạo đức",
          "Khoa học, kỹ thuật và y tế"
        ],
        correct: 0,
        explain: "Đấu tranh giai cấp diễn ra chủ yếu trên các lĩnh vực kinh tế, chính trị và tư tưởng."
      },
      {
        text: "Nhận định nào đúng về giai cấp?",
        answers: [
          "Giai cấp tồn tại trong mọi xã hội",
          "Giai cấp chỉ do văn hóa tạo ra",
          "Giai cấp gắn với điều kiện kinh tế",
          "Giai cấp không liên quan sản xuất"
        ],
        correct: 2,
        explain: "Giai cấp gắn với điều kiện kinh tế và quan hệ sản xuất của xã hội."
      }
    ]
  },
  {
    title: "Phòng 5: Đặc trưng cơ bản của dân tộc",
    questions: [
      {
        text: "Nhận định nào đúng về dân tộc?",
        answers: [
          "Dân tộc chỉ dựa vào huyết thống",
          "Dân tộc hình thành trong lịch sử",
          "Dân tộc chỉ là nhóm nghề nghiệp",
          "Dân tộc không cần lãnh thổ chung"
        ],
        correct: 1,
        explain: "Dân tộc là cộng đồng người hình thành trong quá trình lịch sử."
      },
      {
        text: "Yếu tố nào không phải đặc trưng cơ bản của dân tộc?",
        answers: [
          "Lãnh thổ chung",
          "Ngôn ngữ chung",
          "Đời sống kinh tế chung",
          "Thu nhập ngang nhau"
        ],
        correct: 3,
        explain: "Thu nhập ngang nhau không phải là đặc trưng cơ bản của dân tộc."
      }
    ]
  }
];

const state = {
  room: 0,
  question: 0,
  lives: 5,
  locked: false,
  finished: false,
  transitioning: false,
  enteringRoom: false,
  sceneTimer: null,
  roomTimer: null,
  finishTimer: null,
  entryTimer: null,
  answerTimer: null,
  giftTimer: null,
  castleTimer: null,
  fireworkTimer: null,
  clockTimer: null
};

const sceneNames = [
  "Khu vườn nhận thức",
  "Hầm gạch đấu tranh",
  "Phòng công nghệ số",
  "Đêm lịch sử",
  "Lâu đài công chúa"
];

const stage = document.getElementById("stage");
const sceneLabel = document.getElementById("sceneLabel");
const roomsElement = document.getElementById("rooms");
const mario = document.getElementById("mario");
const princess = document.getElementById("princess");
const roomText = document.getElementById("roomText");
const questionText = document.getElementById("questionText");
const timerText = document.getElementById("timerText");
const livesText = document.getElementById("livesText");
const roomProgressText = document.getElementById("roomProgressText");
const roomTimerText = document.getElementById("roomTimerText");
const roomLivesText = document.getElementById("roomLivesText");
const roomTitle = document.getElementById("roomTitle");
const question = document.getElementById("question");
const answers = document.getElementById("answers");
const feedback = document.getElementById("feedback");
const nextButton = document.getElementById("nextButton");
const restartButton = document.getElementById("restartButton");
const homeButton = document.getElementById("homeButton");
const startButton = document.getElementById("startButton");
const playerNameInput = document.getElementById("playerNameInput");
const resetRankButton = document.getElementById("resetRankButton");
const homeRankBody = document.getElementById("homeRankBody");
const endRankPanel = document.getElementById("endRankPanel");
const endRankBody = document.getElementById("endRankBody");
const LEADERBOARD_API = "/api/leaderboard";
const DEVICE_PLAYED_KEY = "mario_princess_completed_once";
let currentResetVersion = "0";
let gameStarted = false;
let currentPlayer = "";
let runStartTime = 0;
let scoreSaved = false;
let leaderboardSyncTimer = null;

function hasCompletedOnThisDevice() {
  const completedVersion = localStorage.getItem(DEVICE_PLAYED_KEY);
  if (!completedVersion) return false;
  if (completedVersion === "1") return currentResetVersion === "0";
  return completedVersion === currentResetVersion;
}

function markCompletedOnThisDevice() {
  localStorage.setItem(DEVICE_PLAYED_KEY, currentResetVersion || "1");
  updateStartLock();
}

function clearCompletedOnThisDevice() {
  localStorage.removeItem(DEVICE_PLAYED_KEY);
  updateStartLock();
}

function updateStartLock() {
  const completed = hasCompletedOnThisDevice();
  startButton.disabled = completed;
  playerNameInput.disabled = completed;
  startButton.textContent = completed ? "Máy này đã chơi" : "Bắt đầu";
}

function showHomeRankOnly() {
  document.body.classList.add("rank-only");
  syncLeaderboard();
}

function createRooms() {
  rooms.forEach((_, index) => {
    const room = document.createElement("div");
    room.className = "room";
    room.dataset.room = index + 1;
    room.style.left = `${index * 18 + 1}%`;
    roomsElement.appendChild(room);
  });
}

function render() {
  const currentRoom = rooms[state.room];
  const currentQuestion = currentRoom.questions[state.question];

  setScene(state.room);
  document.body.classList.add("room-active");
  document.body.classList.remove("room-entry");
  stage.classList.add("in-room");
  stage.classList.remove("entering-room", "rescue-room", "castle-ready", "gift-scene", "carry-scene", "castle-walk", "firework-scene");
  roomText.textContent = `${state.room + 1} / ${rooms.length}`;
  questionText.textContent = `${state.question + 1} / 2`;
  updateLifeDisplays();
  updateRoomProgress();
  roomTitle.textContent = `Câu ${getGlobalQuestionNumber()}`;
  question.textContent = currentQuestion.text;
  feedback.textContent = "";
  nextButton.classList.add("hidden");
  state.locked = false;
  state.transitioning = false;
  state.enteringRoom = false;
  stage.classList.remove("transitioning");
  mario.classList.remove("walking", "entering");

  mario.style.left = "13%";
  princess.classList.toggle("saved", state.finished);

  [...roomsElement.children].forEach((room, index) => {
    room.classList.toggle("active", index === state.room && !state.finished);
    room.classList.toggle("cleared", index < state.room || state.finished);
    room.classList.remove("opening");
  });

  answers.innerHTML = "";
  currentQuestion.answers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "answer";
    button.textContent = answer;
    button.addEventListener("click", () => chooseAnswer(index, button));
    answers.appendChild(button);
  });
}

function startRoomEntry(roomIndex) {
  clearPendingTimers();
  state.room = roomIndex;
  state.question = 0;
  state.locked = true;
  state.transitioning = true;
  state.enteringRoom = true;
  state.finished = false;

  setScene(state.room);
  document.body.classList.remove("room-active");
  document.body.classList.add("room-entry");
  stage.classList.add("entering-room");
  stage.classList.remove("in-room", "transitioning", "rescue-room", "castle-ready", "gift-scene", "carry-scene", "castle-walk", "firework-scene");
  mario.classList.remove("entering");
  mario.classList.add("walking");
  mario.style.left = `${state.room * 18 + 7}%`;
  princess.classList.remove("saved");

  roomText.textContent = `${state.room + 1} / ${rooms.length}`;
  questionText.textContent = "Chuẩn bị";
  updateLifeDisplays();
  roomProgressText.textContent = `Phòng ${state.room + 1} · Đang mở cửa`;
  roomTitle.textContent = rooms[state.room].title;
  question.textContent = "Mario đang mở cửa bước vào căn phòng...";
  feedback.textContent = "Căn phòng sẽ hiện ra rồi câu hỏi mới xuất hiện.";
  answers.innerHTML = "";
  nextButton.classList.add("hidden");

  [...roomsElement.children].forEach((room, index) => {
    room.classList.toggle("active", index === state.room);
    room.classList.toggle("cleared", index < state.room);
    room.classList.toggle("opening", index === state.room);
  });

  state.entryTimer = setTimeout(() => {
    render();
  }, 1250);
}

function setScene(roomIndex) {
  stage.classList.remove("theme-1", "theme-2", "theme-3", "theme-4", "theme-5");
  stage.classList.add(`theme-${roomIndex + 1}`);
  sceneLabel.textContent = sceneNames[roomIndex];
}

function updateLifeDisplays() {
  const hearts = "♥ ".repeat(state.lives).trim() || "0";
  livesText.textContent = hearts;
  roomLivesText.textContent = hearts;
}

function updateRoomProgress() {
  roomProgressText.textContent = `Phòng ${state.room + 1} · Câu ${state.question + 1}`;
}

function getGlobalQuestionNumber() {
  return state.room * 2 + state.question + 1;
}

function formatTime(milliseconds) {
  const totalSeconds = Math.max(0, Math.round(milliseconds / 1000));
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}:${String(seconds).padStart(2, "0")}`;
}

function updateRunTimer() {
  const elapsed = runStartTime ? Date.now() - runStartTime : 0;
  const text = formatTime(elapsed);
  timerText.textContent = text;
  roomTimerText.textContent = text;
}

function startRunTimer() {
  clearInterval(state.clockTimer);
  updateRunTimer();
  state.clockTimer = setInterval(updateRunTimer, 500);
}

function stopRunTimer() {
  clearInterval(state.clockTimer);
  state.clockTimer = null;
  updateRunTimer();
}

async function fetchOnlineLeaderboard() {
  const response = await fetch(LEADERBOARD_API);

  if (!response.ok) {
    throw new Error("Cannot load online leaderboard.");
  }

  const payload = await response.json();
  syncResetVersion(payload.resetVersion);
  return Array.isArray(payload.rows) ? payload.rows : [];
}

async function submitOnlineScore(row) {
  const response = await fetch(LEADERBOARD_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(row)
  });

  if (!response.ok) {
    throw new Error("Cannot save online score.");
  }

  const payload = await response.json();
  syncResetVersion(payload.resetVersion);
  return Array.isArray(payload.rows) ? payload.rows : [];
}

function syncResetVersion(resetVersion) {
  if (typeof resetVersion !== "string" || !resetVersion) return;
  if (resetVersion !== currentResetVersion) {
    currentResetVersion = resetVersion;
    updateStartLock();
  }
}

async function resetOnlineLeaderboard(code) {
  const response = await fetch(LEADERBOARD_API, {
    method: "DELETE",
    headers: {
      "x-admin-code": code
    }
  });

  const payload = await response.json().catch(() => ({}));

  if (!response.ok) {
    const error = new Error("Cannot reset online leaderboard.");
    error.status = response.status;
    throw error;
  }

  syncResetVersion(payload.resetVersion);
  return Array.isArray(payload.rows) ? payload.rows : [];
}

async function resetLeaderboardByAdmin() {
  const code = window.prompt("Nhập mã admin để reset bảng xếp hạng:");

  if (code === null) return;

  const adminCode = code.trim();

  if (!adminCode) {
    window.alert("Bạn chưa nhập mã admin.");
    return;
  }

  const confirmed = window.confirm("Reset bảng xếp hạng sẽ xóa toàn bộ người chơi hiện tại. Bạn chắc chắn muốn xóa?");

  if (!confirmed) return;

  try {
    const rows = await resetOnlineLeaderboard(adminCode);
    clearCompletedOnThisDevice();
    renderLeaderboard(rows);
    window.alert("Đã reset bảng xếp hạng online. Phiên mới có thể bắt đầu.");
  } catch (error) {
    if (error.status === 403) {
      window.alert("Sai mã admin. Bảng xếp hạng chưa bị xóa.");
      return;
    }

    renderRankStatus("Không kết nối được bảng rank chung.");
    window.alert("Không thể reset bảng rank chung. Hãy kiểm tra server đang chạy.");
  }
}

function createEmptyRankRow(body) {
  createRankStatusRow(body, "Chưa có lượt chơi nào.");
}

function createRankStatusRow(body, text) {
  const row = document.createElement("tr");
  const cell = document.createElement("td");
  cell.colSpan = 3;
  cell.className = "empty-rank";
  cell.textContent = text;
  row.appendChild(cell);
  body.appendChild(row);
}

function renderRankStatus(text) {
  homeRankBody.innerHTML = "";
  endRankBody.innerHTML = "";
  createRankStatusRow(homeRankBody, text);
  createRankStatusRow(endRankBody, text);
}

function fillRankTable(body, rows) {
  body.innerHTML = "";

  if (!rows.length) {
    createEmptyRankRow(body);
    return;
  }

  rows.forEach((row, index) => {
    const tableRow = document.createElement("tr");
    const rankCell = document.createElement("td");
    const nameCell = document.createElement("td");
    const timeCell = document.createElement("td");

    rankCell.textContent = `#${index + 1}`;
    nameCell.textContent = row.name;
    timeCell.textContent = formatTime(row.time);

    tableRow.append(rankCell, nameCell, timeCell);
    body.appendChild(tableRow);
  });
}

function getSortedLeaderboardRows(rows) {
  return rows
    .filter(row => row && typeof row.name === "string" && Number.isFinite(row.time))
    .sort((a, b) => a.time - b.time);
}

function renderLeaderboard(rows = []) {
  const sortedRows = getSortedLeaderboardRows(rows);

  fillRankTable(homeRankBody, sortedRows);
  fillRankTable(endRankBody, sortedRows);
}

async function syncLeaderboard() {
  try {
    const rows = await fetchOnlineLeaderboard();
    renderLeaderboard(rows);
  } catch {
    renderRankStatus("Không kết nối được bảng rank chung. Nếu đang deploy Vercel, hãy kiểm tra biến môi trường Upstash Redis.");
  }
}

function startLeaderboardSync() {
  if (leaderboardSyncTimer) return;
  leaderboardSyncTimer = setInterval(syncLeaderboard, 5000);
}

function stopLeaderboardSync() {
  clearInterval(leaderboardSyncTimer);
  leaderboardSyncTimer = null;
}

function saveCurrentScore() {
  if (scoreSaved || !runStartTime) return null;

  const elapsed = Date.now() - runStartTime;
  stopRunTimer();
  const row = {
    name: currentPlayer || "Người chơi",
    time: elapsed,
    finishedAt: new Date().toISOString()
  };
  scoreSaved = true;
  renderRankStatus("Đang gửi điểm lên bảng rank chung...");
  submitOnlineScore(row)
    .then(onlineRows => {
      markCompletedOnThisDevice();
      renderLeaderboard(onlineRows);
    })
    .catch(() => {
      renderRankStatus("Chưa lưu được điểm lên bảng rank chung. Hãy kiểm tra API /api/leaderboard và cấu hình Upstash Redis trên Vercel.");
    });
  endRankPanel.classList.remove("hidden");
  startLeaderboardSync();
  return elapsed;
}

function chooseAnswer(index, selectedButton) {
  if (state.locked || state.finished || state.transitioning || state.enteringRoom) return;

  const currentQuestion = rooms[state.room].questions[state.question];
  const buttons = [...answers.querySelectorAll("button")];
  const isCorrect = index === currentQuestion.correct;

  state.locked = true;

  if (isCorrect) {
    buttons.forEach((button, buttonIndex) => {
      button.disabled = true;
      if (buttonIndex === currentQuestion.correct) button.classList.add("correct");
    });
    feedback.textContent = `Đúng rồi! ${currentQuestion.explain}`;
    nextButton.classList.add("hidden");
    state.answerTimer = setTimeout(advanceAfterCorrectAnswer, 900);
    return;
  }

  selectedButton.classList.add("wrong");
  selectedButton.disabled = true;
  state.lives -= 1;
  updateLifeDisplays();

  if (state.lives <= 0) {
    feedback.textContent = "Mario đã hết 5 mạng. Trò chơi quay lại phòng 1.";
    nextButton.textContent = "Bắt đầu lại";
    nextButton.classList.remove("hidden");
    return;
  }

  feedback.textContent = "Sai rồi, Mario mất 1 mạng. Hãy chọn lại đáp án khác.";
  nextButton.classList.add("hidden");
  state.locked = false;
}

function isLastQuestion() {
  return state.room === rooms.length - 1 && state.question === rooms[state.room].questions.length - 1;
}

function advanceAfterCorrectAnswer() {
  state.answerTimer = null;

  if (state.lives <= 0) {
    resetGame();
    return;
  }

  if (isLastQuestion()) {
    finishGame();
    return;
  }

  if (state.question === 0) {
    state.question = 1;
    render();
  } else {
    moveToNextRoom();
  }
}

function goNext() {
  if (state.transitioning || state.enteringRoom) return;

  if (state.lives <= 0) {
    resetGame();
    return;
  }

  if (state.finished) {
    returnToHome();
    return;
  }

  const currentQuestion = rooms[state.room].questions[state.question];
  const correctButton = [...answers.querySelectorAll("button")][currentQuestion.correct];
  const answeredCorrectly = correctButton && correctButton.classList.contains("correct") && !answers.querySelector(".wrong");

  if (!answeredCorrectly) {
    render();
    return;
  }

  if (isLastQuestion()) {
    finishGame();
    return;
  }

  if (state.question === 0) {
    state.question = 1;
    render();
  } else {
    moveToNextRoom();
  }
}

function moveToNextRoom() {
  const nextRoom = state.room + 1;

  state.transitioning = true;
  state.locked = true;
  stage.classList.add("transitioning");
  mario.classList.add("walking");
  nextButton.classList.add("hidden");
  feedback.textContent = "Mario đang bước vào phòng tiếp theo...";
  mario.style.left = `${nextRoom * 18 + 7}%`;

  state.sceneTimer = setTimeout(() => {
    setScene(nextRoom);
    mario.classList.add("entering");
    [...roomsElement.children].forEach((room, index) => {
      room.classList.toggle("opening", index === nextRoom);
    });
  }, 420);

  state.roomTimer = setTimeout(() => {
    startRoomEntry(nextRoom);
  }, 980);
}

function finishGame() {
  state.finished = true;
  state.transitioning = false;
  state.enteringRoom = false;
  state.locked = true;
  const elapsed = saveCurrentScore();
  document.body.classList.remove("room-entry");
  document.body.classList.add("room-active", "game-finished");
  stage.classList.add("in-room", "rescue-room", "castle-ready");
  stage.classList.remove("transitioning", "entering-room");
  setScene(4);
  mario.classList.add("walking");
  mario.style.left = "18%";
  nextButton.classList.add("hidden");
  roomText.textContent = "5 / 5";
  questionText.textContent = "Hoàn thành";
  roomProgressText.textContent = "Phòng cứu công chúa";
  updateLifeDisplays();
  sceneLabel.textContent = "Phòng cứu công chúa";
  roomTitle.textContent = "Công chúa đang chờ Mario";
  question.textContent = "Bạn đã trả lời hết câu hỏi. Mario sang phòng cuối để cứu công chúa!";
  answers.innerHTML = "";
  feedback.textContent = elapsed === null ? "Chuẩn bị xem đoạn kết..." : `Hoàn thành trong ${formatTime(elapsed)}. Chuẩn bị xem đoạn kết...`;
  princess.classList.add("saved");
  [...roomsElement.children].forEach(room => room.classList.add("cleared"));

  state.finishTimer = setTimeout(() => {
    mario.classList.remove("walking");
    stage.classList.add("carry-scene");
    roomTitle.textContent = "Mario bế công chúa";
    question.textContent = "Mario bế công chúa sau khi vượt qua toàn bộ thử thách.";
    feedback.textContent = "Công chúa đã được giải cứu thành công!";
  }, 850);

  state.giftTimer = setTimeout(() => {
    stage.classList.add("castle-walk");
    mario.classList.add("walking");
    roomTitle.textContent = "Mario đưa công chúa vào lâu đài";
    question.textContent = "Mario bế công chúa bước vào lâu đài để kết thúc hành trình.";
    feedback.textContent = "Lâu đài đang mở cửa chào đón hai người.";
  }, 2450);

  state.castleTimer = setTimeout(() => {
    stage.classList.remove("gift-scene", "carry-scene", "castle-walk");
    stage.classList.add("firework-scene");
    mario.classList.remove("walking");
    roomTitle.textContent = "Pháo hoa chiến thắng";
    question.textContent = "Kết luận: Trong xã hội số, giai cấp vẫn tồn tại khi còn khác biệt về quyền sở hữu, kiểm soát tư liệu sản xuất, dữ liệu, nền tảng và tri thức.";
    feedback.textContent = "Nhóm đã vượt qua 5 phòng và hoàn thành nội dung activity.";
  }, 4200);

  state.fireworkTimer = null;
}

function resetGame() {
  clearPendingTimers();
  stopLeaderboardSync();
  if (gameStarted) {
    runStartTime = Date.now();
    scoreSaved = false;
    startRunTimer();
  }
  state.room = 0;
  state.question = 0;
  state.lives = 5;
  state.locked = false;
  state.finished = false;
  state.transitioning = false;
  state.enteringRoom = false;
  document.body.classList.remove("room-entry");
  document.body.classList.remove("room-active");
  document.body.classList.remove("game-finished");
  endRankPanel.classList.add("hidden");
  startRoomEntry(0);
}

function returnToHome() {
  clearPendingTimers();
  startLeaderboardSync();
  gameStarted = false;
  currentPlayer = "";
  runStartTime = 0;
  scoreSaved = false;
  stopRunTimer();
  state.room = 0;
  state.question = 0;
  state.lives = 5;
  state.locked = false;
  state.finished = false;
  state.transitioning = false;
  state.enteringRoom = false;
  document.body.classList.add("home-active");
  document.body.classList.remove("room-entry", "room-active", "game-finished");
  stage.classList.remove("in-room", "entering-room", "transitioning", "rescue-room", "castle-ready", "gift-scene", "carry-scene", "castle-walk", "firework-scene");
  mario.classList.remove("walking", "entering");
  princess.classList.remove("saved");
  nextButton.classList.add("hidden");
  endRankPanel.classList.add("hidden");
  playerNameInput.value = "";
  updateStartLock();
  syncLeaderboard();
}

function clearPendingTimers() {
  clearTimeout(state.sceneTimer);
  clearTimeout(state.roomTimer);
  clearTimeout(state.finishTimer);
  clearTimeout(state.entryTimer);
  clearTimeout(state.answerTimer);
  clearTimeout(state.giftTimer);
  clearTimeout(state.castleTimer);
  clearTimeout(state.fireworkTimer);
  state.sceneTimer = null;
  state.roomTimer = null;
  state.finishTimer = null;
  state.entryTimer = null;
  state.answerTimer = null;
  state.giftTimer = null;
  state.castleTimer = null;
  state.fireworkTimer = null;
}

nextButton.addEventListener("click", goNext);
restartButton.addEventListener("click", resetGame);
homeButton.addEventListener("click", () => {
  returnToHome();
  showHomeRankOnly();
});
resetRankButton.addEventListener("click", resetLeaderboardByAdmin);
startButton.addEventListener("click", () => {
  if (gameStarted) return;
  if (hasCompletedOnThisDevice()) {
    window.alert("Máy này đã hoàn thành game một lần. Hãy dùng máy khác hoặc nhờ admin reset nếu cần chơi lại.");
    syncLeaderboard();
    return;
  }
  stopLeaderboardSync();
  gameStarted = true;
  currentPlayer = playerNameInput.value.trim() || "Người chơi";
  runStartTime = Date.now();
  scoreSaved = false;
  startRunTimer();
  endRankPanel.classList.add("hidden");
  document.body.classList.remove("home-active", "rank-only");
  startRoomEntry(0);
});

createRooms();
updateStartLock();
syncLeaderboard();
startLeaderboardSync();
