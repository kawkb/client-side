import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useAuth } from '../useAuth';
import api from '../api/api';


function MatchHistory() {
	const [matches, setMatches] = React.useState<any>([])
	const { login } = useParams();
	const { user, loading } = useAuth();

	useEffect(() => {
		if (loading) return;
		let param = login;
		if (login == null) {
		  param = user.login;
		}
		api
		  .get("/profile/" + param + "/info")
		  .then((res) => {
			console.log(res.data);
			setMatches(res.data.matchHistory)
		  })
		//   });
		// api.post('/profile/update/login', {
		//   login: user.login,
		// });
	  }, [loading]);
  return (
	<div className='match-history-box retro-border-box trans-pink-box copy-book-background'>
		<h1>Match History:</h1>
		<div className='match-history-list scrollable'>

		{
			matches.map((match: any, index: number) => {
				return (
					<div className='match-history-list-item match-history-draw' key={index}>
						<div className='match-history-mode'>Frisky</div>
						<div className='match-history-details'>
							<span className='match-history-owner'>Sigma Houssna</span>
							<span className='match-history-owner-score'>5</span>
							<span className='match-history-dash'>-</span>
							<span className='match-history-opponent-score'>5</span>
							<span className='match-history-opponent'>Kawkab kawtar</span>
						</div>
						<div className='match-history-xp'>+4XP</div>
					</div>
				)
			})

		}
		</div>
	</div>
  )
}

export default MatchHistory