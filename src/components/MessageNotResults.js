const MessageNotResults = (props) => {
  const renderMessage = () => {
    if (props.filteredCharacter.length === 0) {
      return `No hay ningún personaje que coincida con la palabra ${props.filterName}.`;
    }
  };
  return <p className="textNotFound">{renderMessage()}</p>;
};

export default MessageNotResults;
