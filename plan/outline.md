# Context-dependent online personas

## 1. Introduction

This thesis provides an in-depth study of the different ways documents are used to represent people on the web, and how this affects online social interaction. Empirical research feeds into the standardisation efforts of the W3C Social Web WG, and results in recommendations for building social systems which allow users flexibility and control in how they manage their self-presentation. The recommendations are evaluated against requirements derived from the Social WG User Stories, through implementations (and user studies?).

* High level research question: How can people be represented on the Web?
* General points (hypotheses?) that:
  * existing semantics don't correspond well to nuances of real life;
  * poor policies/ethos/over-policing in social systems unfairly restricts people from presenting themselves as they wish;
  * current silo model is unhelpfully disconnected/walled/centralised, restricting types of interactions people can have.

## 2. The Presentation of Self Online

This chapter briefly describes work from the social sciences about performance and personal impression management in offline social situations, before relating it to interdisciplinary literature about self-representation and expectation of privacy in online social networks. I build on this work with three small scale studies, examining how people perform nuanced identity behaviours through online profiles, and the reasons why they do so. This lays a foundation for analysis of existing implementations of social profiles.

* Literature: Social science (Goffman-y stuff), online social (danah boyd, p lange, various CHI etc).
* Empirical analysis of YouTube channel profiles (from SOCM14) as preliminary indication of different presentations of self, and awareness of audience.
* Misrepresenting oneself online: reasons for doing so from surveys (WebSci15) with focus on reasons for deceiving system rather than other people.
* Analysis from lieCloud interviews: further understanding of what people expect from social software with regards to self-presentation, and the relation with offline.

## 3. Social Semantics

This chapter evaluates existing literature on semantics for social profiles, as well as examining current practices on the Web. In order to compare and classify types of social profile, a taxonomy is derived from profile implementations in existing social systems. Taking into account the benefits and deficiences of existing profile models, a new model for decentralised profiles is defined that can be tested through implementation as part of different types of social applications.

* Literature: folksonomies, communities and Semantic Web (k faith lawrence, etc, lots from first year).
* Empirical summary of semantic markup for social, eg. microformats, ogp, social ontologies/vocabularies.
* Contribution: deriving a taxonomy for profiles from terminologies of existing social networks.
* A conceptual model for profiles.

## 4. Standardising social profiles

Based on the work in the previous chapters, here I describe a specification for creating, updating, deleting, moving and connecting social profiles, describe implementations, and evaluate them against the requirements defined by the SocialWG.

* Profiles bits from SocialWG specs <sup>[1](#contingency)</sup>
* Primer (probably will end up writing this for whole spec, maybe only keep profiles stuff for thesis)
* Implementations
  * General profile management according to WG spec
  * 2 apps that share some parts of profile from a common source (ie. context dependancy)

## 5. Persona-ize Everything

Guidelines for creating social applications with flexible, inclusive social profiles. (More specific use-cased based guidelines than the SocialWG spec primer).

* Demonstration of extending existing decentralised social [Crosscloud] apps with persona support.
* Building in persona support from scratch.

## 6. Fin.
  
I assume conclusions will become clear in time.

* Look how much more empowering decentralised social applications are.
* Woah wait I didn't do any direct studies of actual minorities, someone should do that.
* I really hope these recommendations and specs are developer-friendly, and people actually implement from them.
* Don't forget the social web is changing ALL the time, so how to stop all this work becoming immediately out of date? (ie. how this is a building block, or extensible).

<span id="contingency">1: If profile stuff doesn't end up in WG specs, I can still have a spec, and implement as an extension to WG output. </span>