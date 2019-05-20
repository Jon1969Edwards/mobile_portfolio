function toggleNavigation() {
  const navigation = 
  document.getElementById
  ('mainNavigation');

  if (navigation.classList.contains
  ('.isExpanded')) {
    navigation.classList.remove
    ('isExpanded');
  } else {
    navigation.classList.add
    ('isExpanded')
  }
}