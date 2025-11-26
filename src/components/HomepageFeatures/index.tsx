import type { ReactNode } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css'; // Corrected import path

interface FeatureItem {
  title: string;
  description: ReactNode;
}

const FeatureList: FeatureItem[] = [
  {
    title: 'Easy to Learn',
    description: 'Start with beginner-friendly tutorials and gradually advance to complex concepts.',
  },
  {
    title: 'Comprehensive Content',
    description: 'Cover everything from basic syntax to advanced Python programming patterns.',
  },
  {
    title: 'Practical Examples',
    description: 'Learn with real-world projects and hands-on coding exercises.',
  },
];

function Feature({ title, description }: FeatureItem): ReactNode {
  return (
    <div className={clsx('col col--4', styles.feature)}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}