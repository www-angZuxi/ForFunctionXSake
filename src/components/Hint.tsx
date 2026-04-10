
type HintProps = {
  hint: string;
};

function Hint({hint}:HintProps){

    return <>
        <button type="button" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#hintModal">
            <span className="p-2 material-symbols-outlined">lightbulb</span>
        </button>

        <div className="modal fade" id="hintModal" tabIndex={-1} aria-labelledby="hintModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
            <div className="modal-header">
                <h1 className="modal-title fs-5" id="hintModalLabel">Hint 🤔</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body fs-3">
                {hint}
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
            </div>
        </div>
        </div>
    </>
}

export default Hint;