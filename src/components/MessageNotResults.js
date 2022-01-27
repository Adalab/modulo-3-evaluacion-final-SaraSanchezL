const MessageNotResults = (props) => {
  const renderMessage = () => {
    if (props.filteredCharacter.length === 0) {
      return `No hay ningún resultado que coincida con ${props.filterName}.`;
    }
  };
  return <p className="textNotFound">{renderMessage()}</p>;
};

export default MessageNotResults;
