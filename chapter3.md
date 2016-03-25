---
layout: default
title: Chapter 3 - Social Semantics
---

# Social Semantics

## Introduction

The [previous chapter](/thesis/chapter2) discusses an individual's relation with their online representation; how the affordances of a profile impact the culture of an online community, including how users interact and relate to each other, and how users understand themselves as part of the community. The studies described consider profiles and users *within* individual systems, yet online representations of people are employed across different systems in great and exciting variety. In order to build on our understanding of the role an online profile plays in self-presentation, identity and interaction we need a more nuanced understanding of what a 'profile' *is* in a general sense. What is the *meaning* of a profile? Our goal therefore is to establish a framework for classifying online profiles so that they may be more effectively compared despite the differences between systems and communities.

This requires examining profiles from a number of different (potentially overlapping) perspectives:

* Active users of a system, who maintain a profile.
* Passive users of a system, who may not have a profile of their own.
* System designers and developers, who must model and display data about their users.
* Third-party developers who build additional services using data from another system.
* Regulatory bodies which seek to influence or direct how systems are used for legal, ethical or economic reasons.

In this chapter we first review existing work around how particular systems model their users, or allow users to present themselves. Secondly we undertake an empirical analysis of digital representations of users on 20 different online systems. From these we derive a set of constructs to capture the most important features of profiles in online systems and evaluate this framework by classifying a further 10 systems according to it (or something). We propose this as groundwork for deriving requirements for profiles when designing new systems which need digital representations of their users, as well as for assessing the benefits and drawbacks of how profiles are implemented in existing systems in such a way that takes into account the contexts in which they are used.

## Background

### When is a person not a person?

Data modelling and knowledge representation

* FOAF + Relationships
* VCard
* SIOC
* Person or webpage: who cares, does it matter, and httpRange-14 (it is at least worth mentioning if we're going to turn this work into something useful for pedantic engineers etc; the real question is: can I fit this discussion into a section in a chapter, or should I write a whole book on it?)

### User perceptions of profiles

Studies about what users feel they should put in a profile due to community norms, expectations, particular service. Or what users feel might be the consequences of how they use a profile. Particular outcomes of profile usage.

#### [Self-Presentation of Personality During Online Profile Creation](https://www.aaai.org/ocs/index.php/ICWSM/09/paper/viewFile/156/482)

This user study got 52 people to first describe how they want others to perceive them based on an online profile, then asked them to fill out a minimum of 10 from 22 attributes and after each one, they rated the impression their profile gave against TIPI personality attributes. Satisfaction with how the profile matched their ideal self-presentation converged after 10 attributes, with free-form attributes tending to increase satisfaction the most. However this study asks participants to fill out a profile in a void, neglecting that profiles are usually updated with a purpose or awareness of a particular context in mind. Participants indicate a *general* preferred impression they want to give to others, but who are the consumers of the profile? The participants do not indicate who their expected audience is or what they think the profile is for.

* [Self-Presentation and Gender on MySpace](https://www.researchgate.net/publication/222435595_Self-Presentation_and_Gender_on_MySpace)
* Disabilities
 * [Opportunities for People with Disabilities in the Virtual World of Second Life](http://onlinelibrary.wiley.com/doi/10.1002/j.2048-7940.2010.tb00056.x/pdf)
 * [Disability discourses for online identities](http://www.tandfonline.com/doi/pdf/10.1080/09687590220139883?instName=University+of+Edinburgh)
 *
* [Mick or Keith: blended identity of online rock fans](http://download.springer.com/static/pdf/515/art%253A10.1007%252Fs12394-009-0015-5.pdf?originUrl=http%3A%2F%2Flink.springer.com%2Farticle%2F10.1007%2Fs12394-009-0015-5&token2=exp=1454607007~acl=%2Fstatic%2Fpdf%2F515%2Fart%25253A10.1007%25252Fs12394-009-0015-5.pdf%3ForiginUrl%3Dhttp%253A%252F%252Flink.springer.com%252Farticle%252F10.1007%252Fs12394-009-0015-5*~hmac=857c96e9bbf2551fe5a284c7ae7af3136d8ad2f82d8f48c12967dd96fd4827eb)

### Profiles with a purpose

More in depth on how context informs profile useage. (this might be more chapter 2-y)

* [Managing Impressions Online: Self-Presentation Processes in the Online Dating Environment](http://onlinelibrary.wiley.com/doi/10.1111/j.1083-6101.2006.00020.x/full)

#### [Constructing academic alter-egos: identity issues in a blog-based community](http://download.springer.com/static/pdf/526/art%253A10.1007%252Fs12394-009-0020-8.pdf?originUrl=http%3A%2F%2Flink.springer.com%2Farticle%2F10.1007%2Fs12394-009-0020-8&token2=exp=1454607008~acl=%2Fstatic%2Fpdf%2F526%2Fart%25253A10.1007%25252Fs12394-009-0020-8.pdf%3ForiginUrl%3Dhttp%253A%252F%252Flink.springer.com%252Farticle%252F10.1007%252Fs12394-009-0020-8*~hmac=19ee001e710533a633cd3e827bafee6bf6017106127489f26f407924383cfa82)

Observational study of over 200 blogs within a particular community, and semi-structured interviews with 40 bloggers. Identifies five aspects which affect how bloggers build their identity (name and blog title; profiles; post content; voice; affiliations; visual design) and demonstrates that use of consistent pseudonyms allows participation in a community whilst maintaining a layer of indirection between their blog-context activities and their 'physical lives'. Pseudonymity is a norm in this community, but distrust is not of other community members, but the outside world or people who may randomly stumble across blog, or prevent the blog from showing up in search results for the author's real name. Identity performed through initial setup of information displayed on and appearance of blog is reinforced by content, activities and interactions over time. Pseudonyms are rarely changed, and when they are it's to explore a real life transition, and audiences are usually invited along to the new blog.

* [Casanovas of the Virtual World. How Boys Present Themselves on Dating) Websites.](https://www.researchgate.net/publication/47502962_Casanova_s_of_the_Virtual_World_How_Boys_Present_Themselves_on_Dating_Websites)
* [Information Behavior and the Formation and Maintenance of Peer Cultures in Massive Multiplayer Online RolePlaying Games: A Case Study of City of Heroes](http://www.digra.org/wp-content/uploads/digital-library/06278.15067.pdf)
* [The truth about online dating](http://drrobertepstein.com/pdf/Epstein-TheTruthAboutOnlineDating-2-07.pdf?lbisphpreq=1)

### Everybody knows I'm a dog

Studies on constraints of social networks for 'real' relationships, which have rules about accurate self presentatio

### Misc

To sort (or use in ch2)

* [Personality in cyberspace: personal Web sites as media for personality expressions and impressions.](http://www.ncbi.nlm.nih.gov/pubmed/16784349)
* [Composing Cyberspace: Identity, Community, and Knowledge in the Electronic Age](https://books.google.com/books?id=jasQAQAAMAAJ)
* [Mask and Identity: The Hermeneutics of Self-Construction in the Information Age  pp. 191-214](http://ebooks.cambridge.org/chapter.jsf?bid=CBO9780511606373&cid=CBO9780511606373A021)
* [Anonymity and Online Community: Identity Matters](http://www.webcitation.org/query?url=http%3A%2F%2Falistapart.com%2Farticles%2Fidentitymatters&date=2008-09-28)
* [Can You See Me Now? Audience and Disclosure Regulation in Online Social Network Sites](http://bst.sagepub.com/content/28/1/20)
* [The Online Disinhibition Effect](http://online.liebertpub.com/doi/abs/10.1089/1094931041291295)
* [Social Comparison 2.0: Examining the Effects of Online Profiles on Social-Networking Sites](http://online.liebertpub.com/doi/abs/10.1089/cyber.2010.0120)

## Defining an online profile

What are potential variants in how profiles are formed which influence a community (and vice versa)?

### Method

* Study: Start with questions to answer about profiles on different sites; refine questions with progress; find overlaps, similarities, differences; turn this into a framework for categorisation/comparison of types of profile. Probably an actual named method for this.
* Justify selection of starting 20 sites
** Alexa?
** Social Machines classifications?
** Some dimensions to try to cover, like purpose, user base, business model, ..
** types of social media from a classification, eg. Kaplan & Haenlein 2010, White 2014
* Evaluation: apply taxonomy to more. Selection how?

### Limitations

* Western bias
* Frequency of changes

### Results

WIP:

* http://rhiaro.co.uk/2015/06/what-profile
* https://github.com/rhiaro/profiles/blob/master/study.md

(Maybe a summary/table, and raw results go in an appendix)

### Taxonomy

Something coherant and useful, hopefully.

### Evaluation

Apply taxonomy

## Conclusions