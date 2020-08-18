function determineLinkName(link: string) {
  if (link.includes('github')) {
    return 'Visit GitHub';
  }
  return 'Visit Site';
}

export default determineLinkName;
