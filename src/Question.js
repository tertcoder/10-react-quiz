function Question({ dispatch }) {
  return (
    <div>
      {" "}
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "dataReceived" })}
      >
        Let's start
      </button>
    </div>
  );
}

export default Question;
