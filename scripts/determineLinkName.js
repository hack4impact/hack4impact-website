function determineLinkName(link) {
  if (link.includes('github')) {
    return 'Visit GitHub';
  }
  return 'Visit Site';
}

export default determineLinkName;
