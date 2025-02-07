import React from 'react'
import { FeatureCard, CardHead, CardBody, CardFooter } from '../components/Base/Cards/FeatureCard';

const Features = () => {
	return (
		<div className='min-h-screen py-10 flex flex-col items-center justify-around bg-gradient-to-tr from-indigo-900/30 via-purple-100 to-purple-500/30'>
			<div className='z-10 space-y-3'>
				<h2 className='font-heading font-bold text-5xl text-purple-950/80 text-center'>Key Features</h2>
				<p className='text-lg'>Strengthen your cloud security today - Stay protected, stay ahead!</p>
			</div>

			<div className='z-10 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
				<FeatureCard>
					<CardHead>
						Real-Time Vulnerability Scanning
					</CardHead>
					<CardBody>
						Our system continuously scans your application's dependencies for security vulnerabilities, ensuring threats are identified before they can be exploited. With real-time monitoring, you don't have to manually check for issues—our automated system does it for you. Stay ahead of potential security risks and keep your applications protected without extra effort.
					</CardBody>
				</FeatureCard>

				<FeatureCard>
					<CardHead>Seamless Cloud Integration</CardHead>
					<CardBody>
						Easily integrate our service with popular cloud platforms like GitHub, GitLab, and Bitbucket. With a simple setup process, you can start monitoring your application's security without modifying your existing workflows. Whether you're a solo developer or managing a large enterprise, our solution works effortlessly with your cloud-based applications.
					</CardBody>
				</FeatureCard>

				<FeatureCard>
					<CardHead>Instant Alerts & Actionable Reports</CardHead>
					<CardBody>
						When a vulnerability is detected, you receive instant notifications via email or dashboard alerts. Our system provides comprehensive reports with a breakdown of security risks, their severity levels, and step-by-step recommendations to fix them. This helps you take quick action to prevent potential breaches and maintain a secure development environment.
					</CardBody>
				</FeatureCard>

				<FeatureCard>
					<CardHead>AI-Powered Threat Prioritization</CardHead>
					<CardBody>
						Not all vulnerabilities pose the same level of risk. Our AI-driven analysis evaluates each detected issue based on its potential impact and assigns a priority score. This allows you to focus on fixing the most critical security threats first, optimizing your response time and ensuring your application remains secure against high-risk exploits.
					</CardBody>
				</FeatureCard>

			</div>
		</div>
	)
}

export default Features;