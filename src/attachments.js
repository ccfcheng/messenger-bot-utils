const makeText = (text) => {
  if (text.length > 640) {
    const truncated = `${text.slice(0, 637)}...`;
    return { text: truncated };
  }
  return { text };
};

export {
  makeText,
};
