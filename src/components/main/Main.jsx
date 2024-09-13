import { useContext } from "react";
import { assets } from "../../assets/assets";
import "./main.css";
import { Context } from "../../context/Context";

const Main = () => {
	const {
		onSent,
		recentPrompt,
		showResults,
		loading,
		resultData,
		setInput,
		input,
	} = useContext(Context);

	return (
		<div className="main">
			<div className="nav">
				<p>EternIQ</p>
				<img src={assets.user} alt="" />
			</div>
			<div className="main-container">
				{!showResults ? (
					<>
						<div className="greet">
							<p>
								<span>Hello, Dev</span>
							</p>
							<p>How Can I Help You Today?</p>
						</div>
						<div className="cards">
							<div className="card">
								<p>Start</p>
								<img src={assets.start_icon} alt="Start Icon" />
							</div>
							<div className="card">
								<p>Speak</p>
								<img src={assets.speak_icon} alt="Speak Icon" />
							</div>
							<div className="card">
								<p>Stop</p>
								<img src={assets.stop_icon} alt="Stop Icon" />
							</div>
							<div className="card">
								<p>Output will be generated</p>
								<img src={assets.output_icon} alt="Output Icon" />
							</div>
						</div>
					</>
				) : (
					<div className="result">
						<div className="result-title">
							<img src={assets.user} alt="" />
							<p>{recentPrompt}</p>
						</div>
						<div className="result-data">
							<img src={assets.gemini_icon} alt="" />
							{loading ? (
								<div className="loader">
									<hr />
									<hr />
									<hr />
								</div>
							) : (
								<p dangerouslySetInnerHTML={{ __html: resultData }}></p>
							)}
						</div>
					</div>
				)}

				<div className="main-bottom">
					<div className="search-box">
						<input
							onChange={(e) => {
								setInput(e.target.value);
							}}
							value={input}
							type="text"
							placeholder="Enter the Prompt Here"
						/>
						<div>
							<img src={assets.gallery_icon} alt="" />
							<img src={assets.mic_icon} alt="" />
							<img
								src={assets.send_icon}
								alt=""
								onClick={() => {
									onSent();
								}}
							/>
						</div>
					</div>
					<div className="bottom-info">
						<p>
							Gemini may display inaccurate info, including about people, so
							double-check its responses. Your privacy & Gemini Apps
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Main;
