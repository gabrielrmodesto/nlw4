import { useContext } from 'react';
import { ChallengesContext } from '../context/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
	const {level} = useContext(ChallengesContext);
	return (
		<div className={styles.profileContainer}>
			<img src="https://github.com/gabrielrmodesto.png" alt="Gabriel Modesto" />
			<div>
				<strong>Gabriel Modesto</strong>
				<p>
					<img src="icons/level.svg" alt="Level" />
					Level {level}
				</p>
			</div>
		</div>
	);
}
