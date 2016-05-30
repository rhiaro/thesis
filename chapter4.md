---
layout: default
title: Chapter 4
---

# Standardising Social Profiles

This chapter presents a survey of decentralised systems which store data about a person, their attributes and activities. These systems are analysed along various axes to determine their intended function, fitness for purpose and how they are or were ultimately used and to what extent. A particular focus is on treatment of individuals as users of or participants in a system, and we classify systems according to their approach to handling user identities and profile data (based on the definition of profile ch3). We then use this analysis and classification to describe modules of decentralised systems and the contexts in which they are likely to work well and benefit users; and similarly to identify gaps and common pitfalls in theoretical and implementation work.

...

## Motivations and agendas

We begin by describing what drives the systems in our survey. Why does one choose to start desiging or building a decentralised system?

Academic, FOSS, commercial, political, ideals, manifestos

Problem they're trying to solve.

Expressed constraints and limitations.

## Realisation

Extent of implementation / specifications, how well documented, level of community, extensibility.

Were any of them evaluated and how so?

## Social (and) Personal Datastores

The data stored may be distinctly personal, shared with third-parties only in specific contexts for a particular purpose; or it may be inherantly social, expected to be broadcast on creation to at least one other person and possibly subject to further reshaping, sharing, and propagation throughout a network of people. Many datastores are optimised for one or the other of these scenarios and may place constraints on their users accordingly; others attempt to meet requirements for both types of data and encounter different implementation and usability challenges as a result.

### From status updates to microblogging, and beyond

There was some point when everyone (planning/discussing decentralised systems) was referring to 'status updates' and I think twitter maybe switched the terminology to 'microblogging' but now, with AS2 and stuff, I feel like all content is being modelled equally and there's less trying to enumerate all types of content, and awareness of a need for extensibility. This is pertinent to the idea that a stream of content contributes just as much to a person's online presentation as a set of attributes. Status updates were kind of 'my current state' which is distinctly something at the top of a profile, like 'about me right now', but microblogging keeps a feed of past states very visible as well.

https://gist.github.com/rhiaro/62acd5d135548dca47f1

http://rhiaro.co.uk/2015/12/things-happenings

## The people in the machines

Background on how identity fits into these systems and related standards work. Typically for authentication and access control, with representation of user secondary or not covered. What's missing to do with profiles/people from previous and current identity-related standards work? What problems has this caused? (Critique also based on findings in chs 2 & 3.)

## The people behind the machines

POSSIBLY: interviews / focus groups with developers and users of past / failed / faded decentralised social systems.

Post mortem.

## The pieces

Here we uncover common modules of decentralised social systems from previous discussion, and look at where there are overlaps and things that stand out.



## ...

* Criteria for good decentralised, interoperable social profiles.
* Spec for profiles.
* Evaluation fo spec against criteria because apparently this is okay.
* Primer, including how this relates to SWWG specs (via SWP)

# Sources and notes

http://dcentproject.eu/wp-content/uploads/2014/01/D4.1-State-of-the-Art_new_2.pdf

http://www.nesta.org.uk/sites/default/files/research_on_digital_identity_ecosystems.pdf

http://www.www2015.it/documents/proceedings/companion/p1155.pdf

* Backend as a service / nobackend
  * Firebase
  * That other one sandro was talking about with firebase
* Personal data stores
  * indx/webbox (SOCIAM)
  * Mydex
  * That Stanford one
* Personal data stores with separate app stuff going on
  * Solid
  * hood.ie
  * Unhosted / remoteStorage
* Protocols
  * Tent.io
  * webmention/micropub
* Social network stuff
  * pump.io
  * Disapora
  * Friendica
* Blockchain-y stuff (??)
  * Ethereum
  * Maidsafe
* Peer to peer stuff
  * scuttlebot
