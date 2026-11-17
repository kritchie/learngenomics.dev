---
title: "Quiz: From Reads to Variants"
sidebar_label: Chapter Quiz
description: "Check your understanding of each step from reads to variants: read mapping, preparing alignments, calling variants, and filtering and checking calls."
quiz: true
hide_table_of_contents: true
---

Check what you learned about each step of the pipeline, from mapping reads to checking the calls against a truth set. You can retake the quiz as many times as you like.

<Quiz>

<Question answer={false}>

Variant calls made against GRCh37 and calls made against GRCh38 can be compared directly, because each position has the same coordinates in both versions.

<Explanation>

False. The same position has different coordinates in different versions of the reference, so results from two versions can't be compared directly. That is why moving to a new version means mapping every sample again. See [Read Mapping](02-read-mapping.md#choosing-a-reference).

</Explanation>
</Question>

<Question>

minimap2 maps a read that fits two places in the reference equally well, such as a read from inside a repeat. What does it report?

<Option>It leaves the read unmapped, because it can't choose a place.</Option>
<Option>It reports both places, each with half the usual mapping quality.</Option>
<Option correct>It reports one of the places, with a mapping quality of 0.</Option>
<Option>It reports one of the places, with a mapping quality of 60.</Option>

<Explanation>

The aligner still reports one place, but it has no way of knowing which is right, so the mapping quality is 0. A MAPQ of 60 means the opposite: about a one in a million chance that the position is wrong. Because variant callers give reads with low mapping quality little or no weight, variants in repeated sequence are easy to miss. See [Read Mapping](02-read-mapping.md#what-the-aligner-records).

</Explanation>
</Question>

<Question>

Here are the first six columns of one alignment from `samtools view`:

```text
read_1	99	chr20	10250312	60	140M8S
```

What does the CIGAR string `140M8S` say about this read?

<Option>140 bases match the reference exactly, and 8 bases are mismatches.</Option>
<Option>140 bases are aligned, and 8 bases are deleted from the reference.</Option>
<Option>The read starts 140 bases after position `10250312` and is 8 bases long.</Option>
<Option correct>The first 140 bases are aligned, and the last 8 are soft-clipped.</Option>

<Explanation>

`M` counts aligned bases, matching or not, so mismatches are included in the 140. `S` marks soft-clipped bases: they stay in the file but are left out of the alignment. A deletion would be written with `D`. See [Read Mapping](02-read-mapping.md#try-it).

</Explanation>
</Question>

<Question>

Why does the pipeline mark duplicate reads before calling variants?

<Option correct>Copies of one fragment aren't independent evidence, so an error copied into several reads could look like support from several reads.</Option>
<Option>Duplicate reads are mapped to the wrong place on the reference, so they add false variants in other regions.</Option>
<Option>A BAM file that contains duplicate reads can't be indexed, so the caller couldn't jump to a region.</Option>
<Option>Duplicate reads always have low base qualities, so they make the genotype likelihoods less accurate.</Option>

<Explanation>

If a PCR error is copied into three reads, it looks like three reads support it, when it really came from one fragment. Duplicates aren't misplaced: copies of one fragment start and end at the same places, so after mapping they line up exactly. See [Preparing Alignments](03-preparing-alignments.md#marking-duplicates).

</Explanation>
</Question>

<Question multiple>

Which statements about sorting, marking duplicates and indexing are correct?

<Option correct>None of these steps changes where a read aligned.</Option>
<Option>Duplicate marking deletes the duplicate reads, so the file holds only one copy of each fragment.</Option>
<Option correct>Only a sorted BAM file can be indexed.</Option>
<Option>Two read pairs that share only one outer end are marked as duplicates of each other.</Option>
<Option correct>Duplicate marking is usually skipped for amplicon sequencing, because every read from a target starts at the same primer.</Option>

<Explanation>

These steps reorder the reads, label some of them and make the file quick to search. Duplicates stay in the file with a flag set, so nothing is lost. A pair that shares only one end came from a fragment of a different length, so it isn't a duplicate. See [Preparing Alignments](03-preparing-alignments.md#marking-duplicates) and [Indexing](03-preparing-alignments.md#indexing).

</Explanation>
</Question>

<Question>

A call from `bcftools` has `GT:PL:DP:AD` in its format column and these values in its last column:

```text
0/1:255,0,255:47:25,22
```

What does the PL value `255,0,255` tell you?

<Option>255 reads show the reference allele and none show the alternate allele.</Option>
<Option correct>The genotype 0/1 fits the reads best, and 0/0 and 1/1 are both far less likely.</Option>
<Option>The genotype 0/1 has a likelihood of zero, so the call is probably wrong.</Option>
<Option>The caller is 255 times surer of each homozygous genotype than of 0/1.</Option>

<Explanation>

PL lists one value for 0/0, 0/1 and 1/1. The genotype that best fits the reads gets 0, and every 10 points means ten times less likely. 255 is the largest value `bcftools` writes, so both other genotypes are at least that unlikely. The read counts are in AD (`25,22`), not PL. See [Calling Variants](04-calling-variants.md#try-it).

</Explanation>
</Question>

<Question>

The caller gives each call a QUAL score as well as PL values. What question does QUAL answer?

<Option>Which of the possible genotypes best explains the reads</Option>
<Option>How sure the aligner is that the reads at the site are in the right place</Option>
<Option correct>How sure the caller is that the sample carries the alternate allele at all, on one copy or both</Option>
<Option>How many reads cover the site, not counting low-quality bases</Option>

<Explanation>

PL compares the possible genotypes, while QUAL asks only whether the alternate allele is really there. It is on the Phred scale, so a QUAL of 30 means about a 1 in 1,000 chance that the variant isn't there. The aligner's confidence is the mapping quality, and the read count is the depth. See [Calling Variants](04-calling-variants.md#genotype-likelihoods).

</Explanation>
</Question>

<Question>

A pipeline calls only the variants it is most certain of. Compared with a truth set, what result is most likely?

<Option>High recall, but low precision</Option>
<Option>High precision and high recall, because every call is certain</Option>
<Option>Low precision and low recall</Option>
<Option correct>High precision, but low recall</Option>

<Explanation>

Precision is the share of your calls that are right, and recall is the share of the true variants you found. Calling only the most certain variants keeps most calls right but misses many true variants. That is why you need both measures: each one is easy to improve on its own. See [Filtering and Checking Calls](05-filtering-and-checking-calls.md#precision-and-recall).

</Explanation>
</Question>

<Question multiple>

Which statements about filtering calls and checking them against a truth set are correct?

<Option correct>With soft filtering, a call that fails stays in the VCF, with the filter's name in its FILTER column.</Option>
<Option>A call outside the benchmark regions counts as a false positive.</Option>
<Option correct>A call at the right position but with the wrong genotype counts as both a false positive and a false negative.</Option>
<Option correct>A call written as `CTTTT>CTTTTT` can match a truth set record written as `C>CT`, if both add one T to the same run of T's.</Option>
<Option>Results inside the benchmark regions tell you how well the pipeline does across the whole genome, including the hardest regions.</Option>

<Explanation>

Soft filtering labels calls instead of deleting them. A comparison counts only calls in the benchmark regions, which tend to leave out the hardest parts of the genome, so results there tend to be better than across the whole genome. `vcfeval` compares the sequences that result from applying the variants, so two ways of writing one variant still match, but the genotype must be right too. See [Filtering Calls](05-filtering-and-checking-calls.md#filtering-calls), [Truth Sets](05-filtering-and-checking-calls.md#truth-sets) and [Matching Calls](05-filtering-and-checking-calls.md#matching-calls).

</Explanation>
</Question>

<Question answer={true}>

In the chapter's comparison with the truth set, indels were fewer than a fifth of the variants, but they made up most of the false positives and most of the false negatives.

<Explanation>

True. Indels made up 35 of the 47 false positives and 66 of the 76 false negatives, and most of those errors sit in runs of one repeated base or in short repeated patterns. The reads may not show an indel clearly, which is one reason indels are harder to call than SNVs. See [Filtering and Checking Calls](05-filtering-and-checking-calls.md#try-it) and [Calling Variants](04-calling-variants.md#indels).

</Explanation>
</Question>

</Quiz>
