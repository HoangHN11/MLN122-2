import { useMemo, useState } from "react";

const WIN_LINES = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

const QUESTION_MAP = {
  1: {
    type: "mcq",
    title: "Câu 1",
    question: "Theo chủ nghĩa Mác - Lênin, giai cấp là gì?",
    options: [
      "Nhóm người có cùng lối sống.",
      "Cộng đồng có chung nguồn gốc.",
      "Tập đoàn người khác nhau về địa vị kinh tế.",
      "Nhóm người cùng sinh sống trong một nước.",
    ],
    correctIndex: 2,
  },
  2: {
    type: "mcq",
    title: "Câu 2",
    question: "Cơ sở chủ yếu làm xuất hiện giai cấp là gì?",
    options: [
      "Sự khác biệt về văn hóa.",
      "Chế độ tư hữu về tư liệu sản xuất.",
      "Sự phân biệt về dân tộc.",
      "Sự khác nhau về tôn giáo.",
    ],
    correctIndex: 1,
  },
  3: {
    type: "mcq",
    title: "Câu 3",
    question: "Đấu tranh giai cấp là gì?",
    options: [
      "Đấu tranh giữa các dân tộc khác nhau.",
      "Đấu tranh giữa các giai cấp có lợi ích đối lập.",
      "Đấu tranh giữa các nhóm nghề nghiệp.",
      "Đấu tranh giữa các thế hệ trong xã hội.",
    ],
    correctIndex: 1,
  },
  4: {
    type: "mcq",
    title: "Câu 4",
    question: "Đấu tranh giai cấp có vai trò gì trong xã hội có giai cấp?",
    options: [
      "Làm xã hội luôn ổn định.",
      "Là động lực phát triển xã hội.",
      "Xóa bỏ hoàn toàn mâu thuẫn.",
      "Làm mất đi mọi quan hệ kinh tế.",
    ],
    correctIndex: 1,
  },
  5: {
    type: "mcq",
    title: "Câu 5",
    question: "Mục tiêu cuối cùng của giai cấp vô sản là gì?",
    options: [
      "Cải thiện tiền lương lao động.",
      "Giành quyền lợi trước mắt.",
      "Xóa bỏ áp bức, bóc lột.",
      "Mở rộng thị trường sản xuất.",
    ],
    correctIndex: 2,
  },
  6: {
    type: "mcq",
    title: "Câu 6",
    question: "Giai cấp vô sản có sứ mệnh lịch sử vì sao?",
    options: [
      "Đại diện cho phương thức sản xuất tiến bộ.",
      "Có số lượng đông trong mọi xã hội.",
      "Không cần liên minh với lực lượng khác.",
      "Chỉ đấu tranh bằng con đường kinh tế.",
    ],
    correctIndex: 0,
  },
  7: {
    type: "mcq",
    title: "Câu 7",
    question: "Dân tộc được hiểu là gì?",
    options: [
      "Cộng đồng người ổn định, có chung đời sống.",
      "Nhóm người cùng làm một ngành nghề.",
      "Tập hợp người có cùng mức thu nhập.",
      "Nhóm người cùng tham gia một tổ chức.",
    ],
    correctIndex: 0,
  },
  8: {
    type: "mcq",
    title: "Câu 8",
    question:
      "Đúng/Sai: Giai cấp chỉ xuất hiện khi xã hội có sự phân hóa về địa vị kinh tế.",
    options: ["Đúng.", "Sai."],
    correctIndex: 0,
  },
  9: {
    type: "mcq",
    title: "Câu 9",
    question:
      "Đúng/Sai: Đấu tranh giai cấp của giai cấp vô sản chỉ nhằm tăng lương và cải thiện đời sống.",
    options: ["Đúng.", "Sai."],
    correctIndex: 1,
  },
};

const LABELS = ["A", "B", "C", "D"];

const COLOR_LAYOUTS = {
  blue: [1, 5, 7, 3, 9, 2, 6, 8, 4],
  pink: [2, 8, 4, 1, 6, 9, 7, 3, 5],
  yellow: [9, 3, 6, 4, 1, 8, 2, 5, 7],
  red: [5, 2, 8, 7, 4, 1, 9, 6, 3],
};

const COLOR_OPTIONS = [
  {
    id: "blue",
    name: "Xanh dương",
    color: "#3ca7e5",
    strong: "#2f83bb",
    soft: "rgba(60, 167, 229, 0.35)",
  },
  {
    id: "pink",
    name: "Hồng",
    color: "#e55ab7",
    strong: "#be3e95",
    soft: "rgba(229, 90, 183, 0.35)",
  },
  {
    id: "yellow",
    name: "Vàng",
    color: "#f3d54d",
    strong: "#dfb827",
    soft: "rgba(243, 213, 77, 0.35)",
  },
  {
    id: "red",
    name: "Màu đỏ",
    color: "#e53935",
    strong: "#b71c1c",
    soft: "rgba(229, 57, 53, 0.35)",
  },
];

function normalizeText(value) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/\s+/g, " ")
    .trim();
}

function findWinningLine(correctNumbers) {
  const correctSet = new Set(correctNumbers);
  return WIN_LINES.find((line) => line.every((n) => correctSet.has(n))) || null;
}

export default function LotoShow() {
  const [selectedColorId, setSelectedColorId] = useState(null);
  const [openedCell, setOpenedCell] = useState(null);
  const [openedNumber, setOpenedNumber] = useState(null);
  const [correctCells, setCorrectCells] = useState([]);
  const [wrongCells, setWrongCells] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [textAnswer, setTextAnswer] = useState("");
  const [feedback, setFeedback] = useState(null);
  const [winningLine, setWinningLine] = useState(null);
  const [isGameOver, setIsGameOver] = useState(false);

  const usedCells = useMemo(
    () => new Set([...correctCells, ...wrongCells]),
    [correctCells, wrongCells],
  );

  const boardLayout = useMemo(() => {
    if (!selectedColorId) return [1, 2, 3, 4, 5, 6, 7, 8, 9];
    return COLOR_LAYOUTS[selectedColorId] || [1, 2, 3, 4, 5, 6, 7, 8, 9];
  }, [selectedColorId]);

  const selectedColor = useMemo(
    () => COLOR_OPTIONS.find((option) => option.id === selectedColorId) || null,
    [selectedColorId],
  );

  const lotoThemeStyle = useMemo(() => {
    if (!selectedColor) return undefined;
    return {
      "--loto-accent": selectedColor.color,
      "--loto-accent-strong": selectedColor.strong,
      "--loto-accent-soft": selectedColor.soft,
    };
  }, [selectedColor]);

  const currentQuestion = openedNumber ? QUESTION_MAP[openedNumber] : null;

  const openQuestion = (number, cellIndex) => {
    if (
      isGameOver ||
      feedback ||
      usedCells.has(cellIndex) ||
      openedCell !== null
    )
      return;

    setOpenedCell(cellIndex);
    setOpenedNumber(number);
    setSelectedOption(null);
    setTextAnswer("");
  };

  const resolveRound = (isCorrect) => {
    const targetCell = openedCell;
    const targetNumber = openedNumber;
    if (!targetCell || !targetNumber) return;

    const nextCorrect = isCorrect
      ? [...correctCells, targetCell]
      : correctCells;
    const nextWrong = isCorrect ? wrongCells : [...wrongCells, targetCell];
    const line = findWinningLine(nextCorrect);
    const allDone =
      nextCorrect.length + nextWrong.length === boardLayout.length;
    const question = QUESTION_MAP[targetNumber];

    setCorrectCells(nextCorrect);
    setWrongCells(nextWrong);
    setWinningLine(line);
    setFeedback({
      isCorrect,
      answerText: `${LABELS[question.correctIndex]}. ${question.options[question.correctIndex]}`,
    });

    if (line || allDone) {
      setIsGameOver(true);
    }
  };

  const submitAnswer = () => {
    if (!currentQuestion || !openedCell) return;

    if (currentQuestion.type === "mcq") {
      if (selectedOption === null) return;
      resolveRound(selectedOption === currentQuestion.correctIndex);
      return;
    }

    const normalizedInput = normalizeText(textAnswer);
    const normalizedCorrect = normalizeText(currentQuestion.correctText);
    if (!normalizedInput) return;
    resolveRound(normalizedInput === normalizedCorrect);
  };

  const nextRound = () => {
    setFeedback(null);
    setOpenedCell(null);
    setOpenedNumber(null);
    setSelectedOption(null);
    setTextAnswer("");
  };

  const resetBoard = () => {
    setOpenedCell(null);
    setOpenedNumber(null);
    setCorrectCells([]);
    setWrongCells([]);
    setSelectedOption(null);
    setTextAnswer("");
    setFeedback(null);
    setWinningLine(null);
    setIsGameOver(false);
  };

  const restart = () => {
    resetBoard();
  };

  const handleSelectColor = (colorId) => {
    setSelectedColorId(colorId);
    resetBoard();
  };

  const handleChangeColor = () => {
    setSelectedColorId(null);
    resetBoard();
  };

  const gameResultText = winningLine
    ? "Kết thúc: đã có người đạt 3 ô liên tiếp."
    : "Đã mở hết 9 ô nhưng chưa có đường 3 ô liên tiếp.";

  const winningLineValues = winningLine
    ? winningLine.map((cellIndex) => boardLayout[cellIndex - 1])
    : null;

  return (
    <section className="loto-wrap reveal visible" style={lotoThemeStyle}>
      <div className="loto-bg-layer" />
      <div className="loto-overlay" />

      <div className="loto-content">
        <header className="loto-heading">
          <p className="loto-kicker">TRÒ CHƠI NHỎ</p>
          <h2>LÔ TÔ SHOW</h2>
          <p className="loto-sub">
            Quay số, mở ô, trả lời đúng để chinh phục 3 ô liên tiếp.
          </p>
        </header>

        {!selectedColor && (
          <div className="loto-color-screen">
            <p className="loto-color-prompt">Chọn tờ của bạn đi nè!</p>
            <div className="loto-color-grid">
              {COLOR_OPTIONS.map((option) => (
                <button
                  key={option.id}
                  className="loto-color-card"
                  onClick={() => handleSelectColor(option.id)}
                  aria-label={`Chọn màu ${option.name}`}
                >
                  <span
                    className="loto-color-chip"
                    style={{ backgroundColor: option.color }}
                  />
                </button>
              ))}
            </div>
          </div>
        )}

        {selectedColor && (
          <div className="loto-main-grid">
            <div className="loto-board-panel">
              <div className="loto-color-badge">
                Màu đã chọn: <strong>{selectedColor.name}</strong>
              </div>

              <div className="loto-board">
                {boardLayout.map((value, idx) => {
                  const cellIndex = idx + 1;
                  const isWrong = wrongCells.includes(cellIndex);
                  const isCorrect = correctCells.includes(cellIndex);
                  const isActive = openedCell === cellIndex;
                  const inWinningLine = winningLine
                    ? winningLine.includes(cellIndex)
                    : false;

                  let className = "loto-cell";
                  if (isWrong) className += " wrong";
                  if (isCorrect) className += " correct";
                  if (isActive) className += " active";
                  if (inWinningLine) className += " winner";

                  return (
                    <button
                      key={cellIndex}
                      className={className}
                      onClick={() => openQuestion(value, cellIndex)}
                      disabled={
                        isWrong ||
                        isCorrect ||
                        isGameOver ||
                        openedCell !== null ||
                        feedback !== null
                      }
                    >
                      {value}
                    </button>
                  );
                })}
              </div>

              <div className="loto-controls">
                {/* <button className="loto-btn reset" onClick={restart}>
                  Chơi lại
                </button> */}
                <button className="loto-btn reset" onClick={handleChangeColor}>
                  Đổi màu
                </button>
              </div>

              <p className="loto-hint">Bấm vào số bất kỳ để trả lời câu hỏi.</p>
            </div>

            <div className="loto-qa-panel">
              {!openedCell && !feedback && !isGameOver && (
                <div className="loto-empty">
                  <p>Bấm vào một số để bắt đầu câu hỏi!</p>
                </div>
              )}

              {currentQuestion && (
                <div className="loto-question-box">
                  <div className="loto-question-title">
                    {currentQuestion.title}
                  </div>
                  <p className="loto-question-text">
                    {currentQuestion.question}
                  </p>

                  {currentQuestion.type === "mcq" && (
                    <div className="loto-options">
                      {currentQuestion.options.map((option, idx) => {
                        const isPicked = selectedOption === idx;
                        const isCorrect =
                          feedback &&
                          feedback.isCorrect &&
                          idx === currentQuestion.correctIndex;
                        const isWrong =
                          feedback && !feedback.isCorrect && isPicked;

                        let optionClass = "loto-option";
                        if (isPicked) optionClass += " picked";
                        if (isCorrect) optionClass += " correct";
                        if (isWrong) optionClass += " wrong";

                        return (
                          <button
                            key={option}
                            className={optionClass}
                            onClick={() => !feedback && setSelectedOption(idx)}
                            disabled={!!feedback}
                          >
                            <span>{LABELS[idx]}.</span>
                            <span>{option}</span>
                          </button>
                        );
                      })}
                    </div>
                  )}

                  {currentQuestion.type === "fill" && (
                    <div className="loto-fill-wrap">
                      <input
                        type="text"
                        className="loto-fill-input"
                        placeholder="Nhập đáp án"
                        value={textAnswer}
                        onChange={(e) => setTextAnswer(e.target.value)}
                        disabled={!!feedback}
                      />
                    </div>
                  )}

                  {!feedback && (
                    <button className="loto-btn submit" onClick={submitAnswer}>
                      Chốt đáp án
                    </button>
                  )}
                </div>
              )}

              {feedback && (
                <div
                  className={`loto-feedback ${feedback.isCorrect ? "ok" : "bad"}`}
                >
                  <p>
                    {feedback.isCorrect
                      ? "Chính xác! Ô này đã được mở thành công."
                      : "Sai rồi! Chúc bạn may mắn lần sau. Ô này đã bị khóa màu xám."}
                  </p>
                  {!isGameOver && (
                    <button className="loto-btn next" onClick={nextRound}>
                      Tiếp theo
                    </button>
                  )}
                </div>
              )}

              {isGameOver && (
                <div className="loto-gameover">
                  <h3>{gameResultText}</h3>
                  {winningLineValues && (
                    <p>Bộ 3 chiến thắng: {winningLineValues.join(" - ")}</p>
                  )}
                  <button className="loto-btn reset" onClick={restart}>
                    Làm ván mới
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
