import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <div className="container" style={{ marginTop: "150px", height: "100vh" }}>
      {/* Section Heading */}
      <motion.h3
        className="mb-4 font-weight-bold"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{}}
      >
        About Journal
      </motion.h3>

      {/* General Information */}
      <motion.div
        className="mb-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h5 className="font-weight-bold">General Information</h5>
        <p>
          <strong>College of Engineering</strong> - The former faculty of
          engineering (FoE) - of the <em>University of Tehran</em> has renewed
          its policy toward scientific publication. In this regard, since 2009,
          the Chemical Engineering transaction of the well-built 45-year-old
          Persian journal of{" "}
          <em>
            <strong>&quot;Nashrieh Daneshkadeh Fanni&quot;</strong>
          </em>{" "}
          has been published as a separate independent journal named{" "}
          <strong className="text-primary">
            Journal of Chemical and Petroleum Engineering (JChPE)
          </strong>
          . The journal was initially published in Farsi but switched to English
          in 2011.
        </p>
        <p>
          JChPE is a semiannual, double-blind peer-reviewed, fully open-access
          journal that aims to establish an international network for sharing
          the latest scientific and technical research and information in the
          field of chemical and petroleum engineering. We welcome distinguished
          researchers, academic professors, postgraduate students, and anyone
          with knowledge and experience to contribute to the journal.
        </p>
      </motion.div>

      {/* Journal Policy */}
      <motion.div
        className="mb-4"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h5 className="font-weight-bold">Journal Policy</h5>
        <ul>
          <li>The ownership of JChPE belongs to the University of Tehran.</li>
          <li>
            Financial support for JChPE is provided by the University of Tehran.
          </li>
          <li>
            JChPE has no charges either for article processing or article
            submission.
          </li>
          <li>
            JChPE supports the open-access journal policy; so the full text of
            all the articles and reviews are free to access immediately from the
            date of publication.
          </li>
          <li>
            In terms of review, the policy of JChPE is to review all submitted
            articles in a double-blind method. It means neither authors nor
            reviewers know each other’s identities so that each manuscript would
            be reviewed fairly and independently.
          </li>
          <li>
            Papers submitted to JChPE will be screened for plagiarism using the{" "}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary"
            >
              iThenticate
            </a>{" "}
            plagiarism detection tool. JChPE immediately rejects papers leading
            to plagiarism or self-plagiarism.
          </li>
          <li>
            JChPE believes in the Ethical codes of{" "}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary"
            >
              COPE
            </a>{" "}
            and respects publication ethics.
          </li>
        </ul>
      </motion.div>

      {/* Terms and Conditions */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h5 className="font-weight-bold">Terms and Conditions</h5>
        <p>
          JChPE publishes open-access articles under the terms of the{" "}
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary"
          >
            Creative Commons Attribution (CC BY) License
          </a>{" "}
          which permits use, distribution, and reproduction in any medium,
          provided the original work is properly cited.
        </p>
      </motion.div>
    </div>
  );
}

export default About;
