const Notification = ({ message }) => {
  if (message === null) {
    return null
  }

  if (message.includes("Deleted")) {
    return <div className='deleted-message'>{message}</div>;
  }

  return <div className='success-message'>{message}</div>;
};

export default Notification;