import styles from './styles.module.scss';
import PropTypes from 'prop-types';
import Item from './team-item';
var classNames = require('classnames');

function Team({
  infinite,
  items,
}) {
  return(
    <div className={classNames(styles.container, {
      [styles.infinite]: infinite,
      [styles.wrap]: !infinite,
    })}>
      {
        items.map((item, i) => <Item {...item} onClick={() => alert('showModal')}/>)
      }
    </div>
  )
}

Team.propTypes = {
  items: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    role: PropTypes.string,
  }).isRequired,
  infinite: PropTypes.bool,
}

export default Team;
